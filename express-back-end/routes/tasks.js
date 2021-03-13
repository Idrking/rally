const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const taskQueries       = require("../db/queries/tasks/taskQueries");
const { response } = require("express");


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // Gets a count of all users signed up for a specific task
  router.get("/:id/signups/count", (req, res) => {
    db.query(taskQueries.countSignups, [req.params.id])
    .then(count => res.json(count.rows[0].count))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // Gets all the users signed up for a specific task
  router.get("/:id/signups", (req, res) => {
    db.query(taskQueries.allSignups, [req.params.id])
    .then(signups => res.json(signups.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // Gets a specific task
  router.get("/:id", (req, res) => {
    db.query(taskQueries.specificTask, [req.params.id])
    .then(tasks => res.json(tasks.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // Gets all tasks
  router.get("/", (req, res) => {
    db.query(taskQueries.allTasks)
    .then(tasks => res.json(tasks.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // PUT ROUTES ---------------------------------------------

  // Adds a new task
  router.put("/", (req, res) => {
    const queryParams = [
      req.body.name,
      req.body.description,
      req.body.start_date,
      req.body.end_date,
      req.body.spots,
      req.body.image_url,
      req.body.organization_id,
      req.body.location
    ];
    
    db.query(taskQueries.newTask, queryParams)
    .then(() => {
      // send a text message here
      res.status(201)
    })
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // PATCH ROUTES ---------------------------------------------

  // Edits a task
  router.patch("/:id", (req, res) => {
    //TODO
  });

  // DELETE ROUTES ---------------------------------------------
  
  // Deletes a task
  router.delete("/:id", (req, res) => {
    db.query(taskQueries.deleteTask, [req.params.id])
    .then(() => res.status(200))
    .catch(err => res.status(500).send(deliverError(err.message)))
  });
  
  return router;
}