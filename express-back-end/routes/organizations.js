const express           = require("express");
const router            = express.Router();
const orgQueries        = require("../db/queries/organizations/organizationQueries");
const { deliverError }  = require("./helpers/routeHelpers");

module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  // Gets all owners of organization with :id
  router.get("/:id/owners", (req, res) => {
    db.query(orgQueries.allOwners, [req.params.id])
    .then(owners => res.json(owners.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  // Gets the config file for the organizations application
  router.get("/:id/application", (req, res) => {
    db.query(orgQueries.appConfig, [req.params.id])
    .then(config => res.json(config.rows[0].application_config))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  // Gets all the tasks issued by an organization
  router.get("/:id/tasks", (req, res) => {
    db.query(orgQueries.allTasks, [req.params.id])
    .then(tasks => res.json(tasks.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  //Gets all pending approved users for an organization
  router.get("/:id/users/pending", (req, res) => {
    db.query(orgQueries.allPendingVolunteers, [req.params.id])
    .then(volunteers => res.json(volunteers.rows))
    .catch(err => {
      console.error(err);
      res.status(500).send(deliverError(err.message))});
  });


  // Gets all approved users for an organization
  router.get("/:id/users", (req, res) => {
    Promise.all([
      db.query(orgQueries.allVolunteers, [req.params.id]),
      db.query(orgQueries.allPendingVolunteers, [req.params.id])
    ])
      .then(all => {
        res.status(200).json({ info: [...all[0].rows], pending: all[1].rows.length});
      })
      .catch(err => console.error(err));


    // db.query(orgQueries.allVolunteers, [req.params.id])
    // .then(volunteers => res.json(volunteers.rows))
    // .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  // Gets a specific organization
  router.get("/:id", (req, res) => {
    
    Promise.all([
      db.query(orgQueries.specificOrg, [req.params.id]),
      db.query(orgQueries.allPendingVolunteers, [req.params.id])
    ])
      .then(all => {
        res.status(200).json({ info: [...all[0].rows], pending: all[1].rows.length});
      })
      .catch(err => console.error(err));
  });
  
  // Gets all organizations
  router.get("/", (req, res) => {
    db.query(orgQueries.allOrgs)
    .then(orgs => res.json(orgs.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // PUT ROUTES ---------------------------------------------

  // Adds an organization to database
  router.put("/", (req, res) => {
    const queryParams = [
      req.body.name,
      req.body.description,
      req.body.email,
      req.body.phone,
      req.body.location,
      req.body.image_url,
      req.body.website,
      JSON.stringify({default: true})
    ];
    
    db.query(orgQueries.addOrg, queryParams)
    .then(() => res.status(201))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // PATCH ROUTES ---------------------------------------------

  //Edits details for an organizations application
  router.patch("/:id/application", (req, res) => {
    const newConfig = req.body.newConfig;
    db.query(orgQueries.editAppConfig, [newConfig])
    .then(() => res.status(201))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // Edits an organizations details
  router.patch("/:id", (req, res) => {
    //TODO
  });

  // DELETE ROUTES ---------------------------------------------
  
  // Deletes an organization
  router.delete("/:id", (req, res) => {
    db.query(orgQueries.deleteOrg, [req.params.id])
    .then(() => res.status(200))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  return router;
}