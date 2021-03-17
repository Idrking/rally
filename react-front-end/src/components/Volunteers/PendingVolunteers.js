import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams } from 'react-router-dom';

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
    <div>
      <br />
      <Typography variant="h5" component="h2">
        Pending Volunteers
      </Typography>
      <br />
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          href={`/organizations/${id}/manage_volunteers`}
        >
          Manage Volunteers
        </Button>{" "}
        <Button
          size="medium"
          color="primary"
          variant="contained"
          href={`/organizations/${id}/dashboard`}
        >
          Back to Dashboard
        </Button>
      </div>
      <br />

      {pendingVolunteers.map(volunteer => {
        return (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        );
      })}
    </div>
  );
}
