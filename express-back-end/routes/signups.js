const express = require("express");
const router = express.Router();


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  // PUT ROUTES ---------------------------------------------
  
  // Creates a signup for a task with a certain user
  router.put("/:taskid/:userid", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  // DELETE ROUTES ---------------------------------------------
  
  // Cancels a signup
  router.delete("/:taskid/:userid", (req, res) => {

  });

  return router;
}