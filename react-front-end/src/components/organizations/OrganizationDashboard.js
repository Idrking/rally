import React, { useEffect, useState } from "react";
import axios from 'axios';
import Tasks from "../Tasks/Tasks";
import { Typography, Button } from "@material-ui/core";
import TaskModal from "../Tasks/TaskCreateModal";
import { useParams } from "react-router-dom";

export default function OrganizationDashboard() {
  const { id } = useParams();
  const [organization, setOrganization] = useState({});
  useEffect(() => {
    axios.get(`/api/organizations/${id}`)
    .then(res => {
      setOrganization(res.data);
    })
  }, []);
  return (
    <div>
      <div>
        <br />
        <Typography variant="h5" component="h2">
          {organization.name} Dashboard
        </Typography>
        <br />
        <TaskModal org={organization}/>
        <Tasks tasks={[]}/>
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

