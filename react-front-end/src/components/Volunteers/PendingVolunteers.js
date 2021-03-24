import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import VolunteerContext from "../../contexts/VolunteerContext";
import { ArrowBackIos } from "@material-ui/icons";

export default function PendingVolunteers() {
  const { id } = useParams();
  const [pendingVolunteers, setPendingVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/organizations/${id}/users/pending`)
      .then((res) => {
        setPendingVolunteers(res.data);
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
          padding: 15
        }}
      >
        <Toolbar>
          <Link to={`/organizations/${id}/manage_volunteers`}>
            <ArrowBackIos />
          </Link>
        </Toolbar>
      </AppBar>
      <VolunteerContext.Provider
        value={{ pendingVolunteers, setPendingVolunteers }}
      >
        <section className={"dashboardsection"}>
          <Typography variant="h2" component="h2" gutterBottom style={{paddingBottom: 25}}>
            <b>Pending</b> Volunteers
          </Typography>

          {pendingVolunteers.map((volunteer) => {
            return (
              <VolunteerCard pending key={volunteer.id} volunteer={volunteer} />
            );
          })}
        </section>
      </VolunteerContext.Provider>
    </div>
  );
}
