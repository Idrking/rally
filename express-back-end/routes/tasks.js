const express = require("express");
const router = express.Router();


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
    
  // Gets all the users signed up for a specific task
  router.get("/:id/signups", (req, res) => {

  });

  // Gets a specific task
  router.get("/:id", (req, res) => {

  });

  // Gets all tasks
  router.get("/", (req, res) => {
    
  });

  // PUT ROUTES ---------------------------------------------

  // Adds a new task
  router.put("/", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  // Edits a task
  router.patch("/:id", (req, res) => {

  });

  // DELETE ROUTES ---------------------------------------------
  
  // Deletes a task
  router.delete("/:id", (req, res) => {

  });
  
  return router;
}