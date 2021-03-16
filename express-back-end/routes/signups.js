const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const signupQueries     = require("../db/queries/signups/signupQueries");


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  router.get("/:userid/available", (req, res) => {
    db.query(signupQueries.available, [req.params.userid])
    .then(tasks => res.json(tasks.rows))
    .catch(err => {
      console.error(err);
      res.status(500).send(deliverError(err.message))
    });
  });
  
  // Gets all tasks a user is signed up for
  router.get("/:userid", (req, res) => {
    db.query(signupQueries.tasks, [req.params.userid])
    .then(tasks => res.json(tasks.rows))
    .catch(err => {
      console.error(err)
      res.status(500).send(deliverError(err.message))})
  });

  
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