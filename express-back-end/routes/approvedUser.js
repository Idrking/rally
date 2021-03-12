const express = require("express");
const router = express.Router();


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  // PUT ROUTES ---------------------------------------------
  
  // Add an approved user to database (initial application sent)
  router.put("/:orgid/:userid", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  // Edits details of an approved user (used to set approved to True)
  router.patch("/:orgid/:userid", (req, res) => {

  });
  // DELETE ROUTES ---------------------------------------------


  return router;
}