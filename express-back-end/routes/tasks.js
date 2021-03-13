const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const taskQueries       = require("../db/queries/tasks/taskQueries");
const { sendTaskNotification } = require("../notifications/sms/send-sms");
const { formatMessage } = require("../notifications/sms/formatMessage");
const { formatEmailObject } = require("../notifications/email/emailFormatters")
const { emailTask }     = require("../notifications/email/sendEmail")


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
  // (When we're constructing the form, make sure we send along the name of the organization as well)
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

    const messageDetails = {
      name: req.body.name,
      startDate: req.body.start_date,
      id: req.body.id,
      organization: req.body.organization
    }
    
    db.query(taskQueries.newTask, queryParams)
    .then(() => {
      const sms = formatMessage(messageDetails)
      const email = formatEmailObject(messageDetails)
      sendTaskNotification(sms);
      emailTask(email);
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