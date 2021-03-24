import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Badge } from "@material-ui/core";
import TaskCreateForm from "../Tasks/TaskCreateForm";
import EditApplicationForm from "../organizations/EditApplicationForm";
import FormModal from "../helperComponents/FormModal";
import { useParams, Link } from "react-router-dom";
import OrgTaskTabs from "./OrgTaskTabs";
import "../Users/Dashboard.scss";
import PeopleIcon from "@material-ui/icons/People";
import CreateIcon from '@material-ui/icons/Create';
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import OrgDashStyles from "../../styles/OrgDashStyles"
import makeModalButton from "../helperComponents/madeModalButton";

export default function OrganizationDashboard() {
  const classes = OrgDashStyles();
  const { id } = useParams();
  const [configUpdated, setConfigUpdated] = useState(false);
  const [organization, setOrganization] = useState({ info: {}, pending: 0 });
  const [tasks, setTasks] = useState({ active: [], past: [] });
  const [signups, setSignups] = useState([]);
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

  useEffect(() => {
    axios.get(`/api/tasks/${id}/signups/all`)
    .then(counts => setSignups(counts.data))
    .catch(err => console.error(err));
  },[organization]);

  
  return (
    <div className={"backgrounduser"}>
      <section className={"dashboardsection"}>
        <Typography variant="h2" component="h2">
          <b>{organization.info.name}</b>
          <br />
          Dashboard
        </Typography>
        <div className={classes.buttonflex}>
          <FormModal
            className={"dashboardButtons"}
            data={organization.info}
            FormComponent={TaskCreateForm}
            details={{
              task: "Create a Task",
              description: "Enter the details below",
            }}
            ModalButton={onClick => makeModalButton('Create a Task', <FormatListBulletedIcon />, classes.createButton, onClick )}
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
            ModalButton={onClick => makeModalButton('Edit Application', <CreateIcon />, classes.editButton , onClick )}
          >
            <PeopleIcon /> {" Edit Application"}
          </FormModal>

          <Link
            to={`/organizations/${id}/manage_volunteers`}>
            <Badge
              color="secondary"
              badgeContent={organization.pending}
              className={classes.badge}
            >
              {makeModalButton('Manage Volunteers', <PeopleIcon />, classes.buttons)}

            </Badge>
          </Link>


        </div>
      </section>
      <OrgTaskTabs orgView={setTasks} signups={signups} tasks={tasks} />
    </div>
  );
}
