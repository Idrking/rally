import React, { useEffect, useState } from "react";
import axios from 'axios';
import Tasks from "../Tasks/Tasks";
import { Typography, Button, Badge } from "@material-ui/core";
import TaskCreateForm from "../Tasks/TaskCreateForm";
import EditApplicationForm from "../organizations/EditApplicationForm";
import FormModal from "../helperComponents/FormModal";
import { useParams, Link } from "react-router-dom";

export default function OrganizationDashboard() {
  const { id } = useParams();
  const [organization, setOrganization] = useState({info: {}, pending: 0});
  const [tasks, setTasks] = useState({active: [], past: []});
  useEffect(() => {
    axios.get(`/api/organizations/${id}`)
    .then(res => {
      setOrganization({info: res.data.info[0], pending: res.data.pending});
    })
  }, [id]);

  useEffect(() => {
    axios.get(`/api/organizations/${id}/tasks`)
    .then(res => {
      setTasks({
        active: res.data.filter(task => task.complete ? false : true ),
        past: res.data.filter(task => task.complete ? true : false )
      })
    })
  },[organization])

  return (
    <div>
      <div>
        <br />
        <Typography variant="h5" component="h2">
          {organization.info.name} Dashboard
        </Typography>
        <br />
        <FormModal data={organization.info} FormComponent={TaskCreateForm} details={{task: "Create a Task", description: "Enter the details below"}}>
          Create a Task
        </FormModal>
        <FormModal data={organization.info.application_config} FormComponent={EditApplicationForm} details={{task: "Edit your application", description: "These are the questions potential volunteers will answer when applying to your organization"}}>
          Edit Application
        </FormModal>

      </div>

      <div>
      <br />
        <Link to={`/organizations/${id}/manage_volunteers`}>
        <Badge color="secondary" badgeContent={organization.pending}>
          <Button type="submit" variant="contained" color="primary">
            Manage Volunteers
          </Button>
        </Badge>
        </Link>
      </div>
      <div>
        <Typography variant="h5" component="h2">
          Active Tasks
        </Typography>
        <Tasks orgView={setTasks} tasks={tasks.active}/>
      </div>
      <div>
      <Typography variant="h5" component="h2">
        Past Tasks
      </Typography>
      <Tasks tasks={tasks.past}/>
    </div>
  </div>
    
  );
}

