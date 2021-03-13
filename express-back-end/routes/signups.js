const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const signupQueries     = require("../db/queries/signups/signupQueries");


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  // PUT ROUTES ---------------------------------------------
  
  // Creates a signup for a task with a certain user
  router.put("/:taskid/:userid", (req, res) => {
    db.query(signupQueries.signUp, [req.params.userid, req.params.taskid])
    .then(() => res.status(201))
    .catch(err => res.status(500).send(deliverError(err.message)))
  });

  // PATCH ROUTES ---------------------------------------------

  // DELETE ROUTES ---------------------------------------------
  
  // Cancels a signup
  router.delete("/:taskid/:userid", (req, res) => {
    db.query(signupQueries.cancel, [req.params.userid, req.params.taskid])
    .then(() => res.status(200))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  return router;
}