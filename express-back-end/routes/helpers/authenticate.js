const orgQueries = require("../../db/queries/organizations/organizationQueries");
const appUsersQueries = require("../../db/queries/approved_users/appUsersQueries");

module.exports = {
  //Checks if request is made by a logged-in user
  user: function(session) {
    return session.userID;
  },

  // checks to see if the logged-in user owns the organization
  organizationOwner: function(session, orgId, db) {
    return db.query(orgQueries.allOwners, [orgId])
    .then(owners => {
      for (const owner of owners.rows) {
        if (session.userID === owner.id) {
          return true;
        }
        return false; 
      }
    })
    .catch(err => console.error(err));
  },

  //Checks to see if the currently logged in user can sign up for this task
  canSignUp: function(session, params, db) {
    if (!session.userID === params.userid) {
      return Promise.resolve(false);
    }

    return db.query(appUsersQueries, [params.taskid, params.userid])
    .then(user => user.rows ? true : false)
    .catch(err => console.error(err));
  }
  
}