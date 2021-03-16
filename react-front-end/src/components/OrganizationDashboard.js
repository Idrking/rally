import React from "react";
import Tasks from "./Tasks";
import { Typography, Button } from "@material-ui/core";

export default function OrganizationDashboard() {
  return (
    <div>
      <div>
        <br />
        <Typography variant="h5" component="h2">
          Organization Dashboard
        </Typography>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Create New Task
        </Button>
        <Tasks />
      </div>

      <div>
      <br />
        <Button type="submit" variant="contained" color="primary" href="/organizations/:id/manage_volunteers">
          Manage Volunteers
        </Button>
      </div>
    </div>
  );
}

