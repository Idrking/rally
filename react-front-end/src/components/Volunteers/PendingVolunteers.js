import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import VolunteerContext from '../../contexts/VolunteerContext';

export default function PendingVolunteers() {
  const { id } = useParams();
  const [pendingVolunteers, setPendingVolunteers] = useState([]);

  useEffect(() => {
    axios.get(`/api/organizations/${id}/users/pending`)
      .then(res => {
        setPendingVolunteers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);


  return (
    <VolunteerContext.Provider value={{pendingVolunteers, setPendingVolunteers}} >
      <div>
        <br />
        <Typography variant="h5" component="h2">
          Pending Volunteers
        </Typography>
        <br />
        <div>
          <Link to={`/organizations/${id}/manage_volunteers`}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Manage Volunteers
            </Button></Link>{" "}
          <Link to={`/organizations/${id}/dashboard`}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
            >
              Back to Dashboard
            </Button>
          </Link>
        </div>
        <br />

        {pendingVolunteers.map(volunteer => {
          return (
            <VolunteerCard pending key={volunteer.id} volunteer={volunteer} />
          );
        })}
      </div>
    </VolunteerContext.Provider>
  );
}
