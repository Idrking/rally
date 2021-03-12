const express = require("express");
const router = express.Router();


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  //returns all organization user with :id owns
  router.get("/:id/organizations/owns", (req, res) => {
    
  });
  
  //returns all organizations user with :id is a part of
  // (checks approved_users table)
  router.get("/:id/organizations", (req, res) => {
    
  });
  
  
  //returns a specific user
  router.get("/:id", (req, res) => {
    
  });
  
  // returns all users
  router.get("/", (req, res) => {

  });
  
  // PUT ROUTES ---------------------------------------------

  // adds a user to the database (registration route)
  router.put("/", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  // edits a user's information
  router.patch("/:id", (req, res) => {

  });

  // DELETE ROUTES ---------------------------------------------
  
  // deletes a user
  router.delete("/:id", (req, res) => {

  });

  return router;
}