import React, { useEffect, useState } from "react";
import axios from "axios";
import Tasks from "../Tasks/Tasks";
import { Typography, Button, Badge } from "@material-ui/core";
import TaskCreateForm from "../Tasks/TaskCreateForm";
import EditApplicationForm from "../organizations/EditApplicationForm";
import FormModal from "../helperComponents/FormModal";
import { useParams, Link } from "react-router-dom";
import OrgTaskTabs from "./OrgTaskTabs"
import TaskTabs from "../Users/TaskTabs"
import "../Users/Dashboard.scss";

export default function OrganizationDashboard() {
  const { id } = useParams();
  const [configUpdated, setConfigUpdated] = useState(false);
  const [organization, setOrganization] = useState({ info: {}, pending: 0 });
  const [tasks, setTasks] = useState({ active: [], past: [] });
  useEffect(() => {
    axios.get(`/api/organizations/${id}`).then((res) => {
      setOrganization({ info: res.data.info[0], pending: res.data.pending });
    });
  }, [id, configUpdated]);

  useEffect(() => {
    axios.get(`/api/organizations/${id}/tasks`).then((res) => {
      setTasks({
        active: res.data.filter((task) => (task.complete ? false : true)),
        past: res.data.filter((task) => (task.complete ? true : false)),
      });
    });
  }, [organization]);

  return (
    <div className={"backgrounduser"}>
      <div>
        <br />
        <Typography variant="h2" component="h2" className={"yourtasks"}>
          <b>{organization.info.name}</b>
          <br />
          Dashboard
        </Typography>
        <br />

        <FormModal
          data={organization.info}
          FormComponent={TaskCreateForm}
          details={{
            task: "Create a Task",
            description: "Enter the details below",
          }}
        >
          Create a Task
        </FormModal>
        <FormModal
          data={organization.info.application_config}
          FormComponent={EditApplicationForm}
          details={{
            task: "Edit your application",
            description:
              "These are the questions potential volunteers will answer when applying to your organization",
          }}
          stateChanger={setConfigUpdated}
        >
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

      <OrgTaskTabs tasks={tasks} />
    </div>
  );
}
