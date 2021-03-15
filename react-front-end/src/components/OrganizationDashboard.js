import React from "react";
import Tasks from "./Tasks";
import { Typography, Button } from "@material-ui/core";

export default function OrganizationDashboard() {

  return (
    <div>
      <br/>
      <Typography variant="h4" component="h2">Available tasks</Typography>
      <Tasks></Tasks>
      <br/>
      <Button type="submit"
        variant="contained"
        color="primary">Create New Task</Button>
      {" "}
      <Button type="submit"
        variant="contained"
        color="primary">Manage Volunteers</Button>
    </div>


  );
}