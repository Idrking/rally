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

  // Gets a specific task w/ signups
  router.get("/:id", (req, res) => {
    Promise.all([
      db.query(taskQueries.specificTask, [req.params.id]),
      db.query(taskQueries.allSignups, [req.params.id])
    ])
    .then(([taskQueryResult, signupsQueryResult]) => {
      let task = taskQueryResult.rows[0];
      task.signups = signupsQueryResult.rows
      res.json(task)
    })
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
  //Automatically sends out notifications after successfully adding to db

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
    .then(taskID => {
      const messageDetails = {
        name: req.body.name,
        startDate: new Date(req.body.start_date),
        id: taskID.rows[0].id,
        organization: req.body.organization,
        description: req.body.description
      }
      const sms = formatMessage(messageDetails)
      const email = formatEmailObject(messageDetails)
      sendTaskNotification(sms);
      emailTask(email);
      res.status(201).json(taskID.rows);
    })
    .catch(err => console.error(err));
  });

  // PATCH ROUTES ---------------------------------------------
  // Marks a task as complete
  router.patch("/:id/complete", (req, res) => {
    db.query(taskQueries.completeTask, [req.params.id])
    .then(() => res.status(200).end())
    .catch(err => console.error(err));
  });
  

  // Edits a task
  router.patch("/:id", (req, res) => {
    //TODO
  });


  
  return router;
}