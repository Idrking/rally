const express           = require("express");
const router            = express.Router();



module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  router.get("/authenticate", (req, res) => {
    if (!req.session.userID) {
      res.status(200).json({id: null, name: null})
      return;
    }

    res.status(202).json({id: req.session.userID, name: req.session.userName, profile_image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"})
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