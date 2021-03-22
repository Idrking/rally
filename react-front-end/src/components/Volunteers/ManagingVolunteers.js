import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography, Badge } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import OrgDashStyles from "../../styles/OrgDashStyles";

export default function ManagingVolunteers() {
  const classes = OrgDashStyles();
  const { id } = useParams();
  const [volunteers, setVolunteers] = useState({ volunteers: [], pending: 0 });
  useEffect(() => {
    axios
      .get(`/api/organizations/${id}/users/`)
      .then((res) => {
        setVolunteers({ volunteers: res.data.info, pending: res.data.pending });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={"backgrounduser"}>
      <section className={"dashboardsection"}>
        <Typography variant="h2" component="h2">
          <b>Manage</b> Volunteers
        </Typography>

        <div className={classes.buttonflex}>
          <Link to={`/organizations/${id}/pending_volunteers`}>
            <Badge
              color="secondary"
              badgeContent={volunteers.pending}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              className={classes.badge}
            >
              <Button
                fullWidth
                size="medium"
                variant="contained"
                className={classes.buttons}
                style={{ backgroundColor: "#B6C7C3", color: "#fff"}}
              >
                Pending Volunteers
              </Button>
            </Badge>
          </Link>

          <Link to={`/organizations/${id}/dashboard`}>
            <Button size="medium" color="primary" variant="contained">
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <br />
        {volunteers.volunteers.map((volunteer) => {
          return <VolunteerCard key={volunteer.id} volunteer={volunteer} />;
        })}
      </section>
    </div>
  );
}
