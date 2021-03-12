const express           = require("express");
const router            = express.Router();
const { deliverError }  = require("./helpers/routeHelpers");
const appUserQueries    = require("../db/queries/approved_users/appUsersQueries");

module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  // PUT ROUTES ---------------------------------------------
  
  // Add an approved user to database (initial application sent)
  router.put("/:orgid/:userid", (req, res) => {
    const queryParams = [
      req.params.userid,
      req.params.orgid,
      false,
      JSON.stringify(req.body.application)
    ];

    db.query(appUserQueries.initialApplication, queryParams)
    .then(() => res.status(201))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // PATCH ROUTES ---------------------------------------------

  // Edits details of an approved user (used to set approved to True)
  router.patch("/:orgid/:userid", (req, res) => {
    db.query(appUserQueries.approveVolunteer, [req.params.userid, req.params.orgid])
    .then(() => res.status(201))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  // DELETE ROUTES ---------------------------------------------


  return router;
}