const express           = require("express");
const dayjs             = require ('dayjs');
const utc               = require('dayjs/plugin/utc');
const timezone          = require('dayjs/plugin/timezone');
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const taskQueries       = require("../db/queries/tasks/taskQueries");
const { sendTaskNotification } = require("../notifications/sms/send-sms");
const { formatMessage } = require("../notifications/sms/formatMessage");
const { formatEmailObject } = require("../notifications/email/emailFormatters")
const { emailTask }     = require("../notifications/email/sendEmail")

dayjs.extend(utc);
dayjs.extend(timezone);


module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // Gets a count of all users signed up for a specific task
  
  router.get("/:id/signups/count", (req, res) => {
    db.query(taskQueries.countSignups, [req.params.id])
    .then(count => res.json(count.rows[0].count))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // Returns a count of the current signups for each task issued by orgid
  router.get('/:orgid/signups/all', (req, res) => {
    db.query(taskQueries.countAll, [req.params.orgid])
    .then(count => {
      res.status(200).json(count.rows)
    })
    .catch(err => console.error(err));
  });

  // Returns a count of the current signups for each task a user has available
  router.get('/:userid/signups/user', (req, res) => {
    db.query(taskQueries.countAllUser, [req.params.userid])
    .then(count => {
      console.log(count)
      res.status(200).json(count.rows)
    })
    .catch(err => console.error(err));
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
      const task = taskQueryResult.rows[0];
      task.signups = signupsQueryResult.rows
      res.json(task)
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(deliverError(err.message))
    });
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
        startDate: dayjs.tz(req.body.start_date).format('h:mm A ddd, MMM D'),
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