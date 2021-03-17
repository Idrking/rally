import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import axios from "axios";


export default function ManagingVolunteers() {
  const { id } = useParams();
  const [volunteers, setVolunteers] = useState([])
  useEffect(() => {
    axios.get(`/api/organizations/${id}/users/`)
      .then(res => {
        setVolunteers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <br />
      <Typography variant="h5" component="h2">
        Managing Volunteers
      </Typography>
      <br />
      <div>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          href={`/organizations/${id}/pending_volunteers`}
        >
          Pending Volunteers
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
      {volunteers.map(volunteer => {
        return (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        );
      })}
    </div>
  );
}

