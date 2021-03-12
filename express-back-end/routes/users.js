const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users/userQueries");

//constants
const deliverError = errMessage => `500: Internal Server Error. \n Error: ${errMessage}`



module.exports = (db) => {

  // GET ROUTES ---------------------------------------------
  
  
  //returns all organizations user with :id owns
  router.get("/:id/organizations/owns", (req, res) => {
    db.query(userQueries.ownedOrganizations, [req.params.id])
    .then(orgs => res.json(orgs.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  //returns all organizations user with :id is a part of
  // (checks approved_users table)
  router.get("/:id/organizations", (req, res) => {
    db.query(userQueries.joinedOrganizations, [req.params.id])
    .then((orgs) => res.json(orgs.rows))
    .catch((err) => res.status(500).send(deliverError(err.message)));
  });
  
  
  //returns a specific user
  router.get("/:id", async (req, res) => {
    db.query(userQueries.specificUser, [req.params.id])
    .then(user => res.json(user.rows[0]))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  // returns all users
  router.get("/", (req, res) => {
    db.query(userQueries.allUsers, [req.params.id])
    .then(users => res.json(users.rows))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });
  
  // PUT ROUTES ---------------------------------------------

  // adds a user to the database (registration route)
  router.put("/", (req, res) => {
    //sets the query params using info from form
    const queryParams = [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.profile_image_url
    ];

    db.query(userQueries.addUser, queryParams)
    .then(() => res.status(201))
    .catch(err => res.status(500).send(deliverError(err.message)));
  });

  // PATCH ROUTES ---------------------------------------------

  // edits a user's information
  router.patch("/:id", (req, res) => {
    //TODO
  });

  // DELETE ROUTES ---------------------------------------------
  
  // deletes a user
  router.delete("/:id", (req, res) => {
    db.query(userQueries.deleteUser, [req.params.id])
    .then(() => res.status(200))
    .catch(err => res.status(500).send(deliverError(err.message)))
  });

  return router;
}