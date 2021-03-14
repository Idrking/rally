const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");



module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // POST ROUTES ---------------------------------------------

  //Fake login routes for demo - don't you dare use this in production
  router.post("/1", (req, res) => {
    req.session.userID = 1
    res.redirect('/users/1')
  });
  

  // PUT ROUTES ---------------------------------------------
  
  // PATCH ROUTES ---------------------------------------------

  // DELETE ROUTES ---------------------------------------------
  router.delete("/logout", (req, res) => {
    req.session = null;
    res.redirect("/")
  })

  return router;
}