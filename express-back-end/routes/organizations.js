<<<<<<< HEAD
const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // Gets all owners of organization with :id
  router.get("/:id/owners", (req, res) => {
    
  });
  
  // Gets the config file for the organizations application
  router.get("/:id/application", (req, res) => {
    
  });
  
  // Gets all the tasks issued by an organization
  router.get("/:id/tasks", (req, res) => {
    
  });
  
  // Gets all approved users for an organization
  router.get("/:id/users", (req, res) => {
    
  });
  
  // Gets a specific organization
  router.get("/:id", (req, res) => {
    
  });
  
  // Gets all organizations
  router.get("/", (req, res) => {

  });

  // PUT ROUTES ---------------------------------------------

  // Adds an organization to database
  router.put("/", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  //Edits details for an organizations application
  router.patch("/:id/application", (req, res) => {

  });

  // Edits an organizations details
  router.patch("/:id", (req, res) => {

  });

  // DELETE ROUTES ---------------------------------------------
  
  // Deletes an organization
  router.delete("/:id", (req, res) => {

  });

  return router;
=======
const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // Gets all organizations
  router.get("/", (req, res) => {

  });

  // Gets all owners of organization with :id
  router.get("/:id/owners", (req, res) => {

  });

  // Gets the config file for the organizations application
  router.get("/:id/application", (req, res) => {

  });

  // Gets all the tasks issued by an organization
  router.get("/:id/tasks", (req, res) => {

  });

  // Gets all approved users for an organization
  router.get("/:id/users", (req, res) => {

  });

  // Gets a specific organization
  router.get("/:id", (req, res) => {

  });

  // PUT ROUTES ---------------------------------------------

  // Adds an organization to database
  router.put("/", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  //Edits details for an organizations application
  router.patch("/:id/application", (req, res) => {

  });

  // Edits an organizations details
  router.patch("/:id", (req, res) => {

  });

  // DELETE ROUTES ---------------------------------------------
  
  // Deletes an organization
  router.delete("/:id", (req, res) => {

  });

  return router;
>>>>>>> master
}