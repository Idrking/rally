const express           = require("express");
const router            = express.Router();



module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // POST ROUTES ---------------------------------------------

  //Fake login routes for demo - don't you dare use this in production
  router.get("/1", (req, res) => {
    console.log("We made it this far")
    req.session.userID = 1;
    res.status(200).end();
  });

  router.get("/2", (req, res) => {
    req.session.userID = 2
    res.redirect('/users/2')
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