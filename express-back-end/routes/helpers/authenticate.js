

module.exports = {
  //Checks if request is made by a logged-in user
  user: function(session) {
    return session.userID;
  },

  //
  owner: function(session, db) {

  }
  
}