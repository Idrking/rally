import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography, Badge } from "@material-ui/core";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";


export default function ManagingVolunteers() {
  const { id } = useParams();
  const [volunteers, setVolunteers] = useState({volunteers: [], pending: 0})
  useEffect(() => {
    axios.get(`/api/organizations/${id}/users/`)
      .then(res => {
        setVolunteers({volunteers: res.data.info, pending: res.data.pending});
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
        <Link to={`/organizations/${id}/pending_volunteers`}>
          <Badge color="secondary" badgeContent={volunteers.pending} anchorOrigin={{vertical:'top', horizontal: 'left'}}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
            >
              Pending Volunteers
          </Button></Badge></Link>{" "}
          
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
      {volunteers.volunteers.map(volunteer => {
        return (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        );
      })}
    </div>
  );
}

