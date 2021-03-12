const express = require("express");
const router = express.Router();


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  // PUT ROUTES ---------------------------------------------
  
  // Add an a user as an owner for an organization
  router.put("/:orgid/:userid", (req, res) => {

  });

  // PATCH ROUTES ---------------------------------------------

  // DELETE ROUTES ---------------------------------------------


  return router;
}