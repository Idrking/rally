const orgQueries = require("../../db/queries/organizations/organizationQueries");

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
  },

  //Checks to see if the currently logged in user can sign up for this task
  canSignUp: function(session, params, db) {
    if (!session.userID === params.userid) {
      return Promise.resolve(false);
    }

    return db.query(`
      SELECT approved_users.id
      FROM approved_users
      JOIN organizations ON organizations.id = approved_users.organization_id
      JOIN tasks ON organizations.id = tasks.organization_id
    
    `)


  }
  
}