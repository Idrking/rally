const express = require("express");
const router = express.Router();
const { deliverError } = require("./helpers/routeHelpers");
const ownerQueries = require("../db/queries/owners/ownerQueries");

module.exports = (db) => {
  // GET ROUTES ---------------------------------------------

  // PUT ROUTES ---------------------------------------------

  // Add an a user as an owner for an organization
  router.put("/:orgid/:userid", (req, res) => {
    db.query(ownerQueries.addOwner, [req.params.userid, req.params.orgid])
      .then(() => res.status(201))
      .catch((err) => res.status(500).send(deliverError(err.message)));
  });

  // PATCH ROUTES ---------------------------------------------

  // DELETE ROUTES ---------------------------------------------

  return router;
};
