import React from "react";
import VolunteerCard from "./VolunteerCard";
import { Button, Typography } from "@material-ui/core";

export default function ManagingVolunteers() {
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
          href="/organizations/:id/manage_volunteers"
        >
          Manage Volunteers
        </Button>{" "}
        <Button
          size="medium"
          color="primary"
          variant="contained"
          href="/organizations/:id/dashboard"
        >
          Back to Dashboard
        </Button>
      </div>
      <br />
      <div>
        <VolunteerCard />
      </div>
      <br />
      <div>
        <VolunteerCard />
      </div>
      <br />
    </div>
  );
}
