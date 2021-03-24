import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography, Badge, AppBar, Toolbar } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ArrowBackIos } from "@material-ui/icons";

export default function ManagingVolunteers() {
  // const classes = OrgDashStyles();
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
      <AppBar
        position="sticky"
        style={{
          color: "#6D7E73",
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: 15,
        }}
      >
        <Toolbar>
          <Link to={`/organizations/${id}/dashboard`}>
            <ArrowBackIos />
          </Link>
          <Badge
              color="secondary"
              badgeContent={volunteers.pending}
            >
            <Link to={`/organizations/${id}/pending_volunteers`}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                style={{ boxShadow: "none"}}
              >
                Pending Volunteers
              </Button>
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
      <section className={"dashboardsection"}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          style={{ paddingBottom: 25 }}
        >
          <b>Manage</b> Volunteers
        </Typography>

        <br />
        {volunteers.volunteers.map((volunteer) => {
          return <VolunteerCard key={volunteer.id} volunteer={volunteer} />;
        })}
      </section>
    </div>
  );
}
