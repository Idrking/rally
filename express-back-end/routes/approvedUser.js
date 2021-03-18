const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const appUserQueries    = require("../db/queries/approved_users/appUsersQueries");

module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  router.get("/:orgid/:userid/application", (req, res) => {
    db.query(appUserQueries.specific, [req.params.userid, req.params.orgid])
    .then(entry => res.status(200).json(entry.rows))
    .catch(err => console.error(err));
  });
  
  // PUT ROUTES ---------------------------------------------
  
  // Add an approved user to database (initial application sent)
  router.put("/:orgid/:userid", (req, res) => {
    const queryParams = [
      req.params.userid,
      req.params.orgid,
      'pending',
      JSON.stringify(req.body.application)
    ];

    db.query(appUserQueries.initialApplication, queryParams)
    .then(() => res.status(201).json(res.rows))
    .catch(err => {
      console.error(err)
      res.status(500).send("Internal Server Error");
    })
  });

  // PATCH ROUTES ---------------------------------------------

  // Edits details of an approved user (used to set approved to True)
  router.patch("/:orgid/:userid", (req, res) => {
    db.query(appUserQueries.approveVolunteer, [req.params.userid, req.params.orgid])
    .then(() => res.status(201).end())
    .catch(err => console.error(err));
  });
  // DELETE ROUTES ---------------------------------------------


  return router;
}