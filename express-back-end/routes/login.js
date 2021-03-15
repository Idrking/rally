const express           = require("express");
const router            = express.Router();



module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  router.get("/authenticate", (req, res) => {
    if (!req.session.userID) {
      res.status(200).json({id: null, name: null})
      return;
    }

    res.status(202).json({id: req.session.userID, name: req.session.userName})
  })

  //Fake login routes for demo - don't you dare use this in production
  router.get("/1", (req, res) => {
    req.session.userID = 1;
    req.session.userName = "Gabe"
    res.status(200).end();
  });

  router.get("/2", (req, res) => {
    req.session.userID = 2
    req.session.userName = "Larry"
    res.status(200).end();
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