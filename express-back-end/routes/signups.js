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

  router.get('/:userid/history', (req, res) => {
    db.query(signupQueries.history, [req.params.userid])
    .then(count => res.status(200).json(count.rows[0]))
    .catch(err => console.error(err));
  })
  
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
    .then((signups) => res.status(201).json(signups.rows))
    .catch(err => console.error(err));
  });

  // PATCH ROUTES ---------------------------------------------

  // DELETE ROUTES ---------------------------------------------
  
  // Cancels a signup
  router.delete("/:taskid/:userid", (req, res) => {
    db.query(signupQueries.cancel, [req.params.userid, req.params.taskid])
    .then(() => res.status(200).end())
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  return router;
}