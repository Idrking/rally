import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Typography } from "@material-ui/core";
import Axios from "axios";
import "./Dashboard.scss";
import TaskTabs from "./TaskTabs";

export default function UserDashboard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState({
    active: [],
    available: [],
    completed: [],
  });
  const [signups, setSignups] = useState([]);

  useEffect(() => {
    Promise.all([
      Axios.get(`/api/signup/${id}`),
      Axios.get(`/api/signup/${id}/available`),
      Axios.get(`/api/signup/${id}/completed`),
    ])
      .then((all) => {
        setTasks((prev) => {
          return {
            ...prev,
            active: [...all[0].data],
            available: filterAvailable(all[0].data, all[1].data),
            completed: [...all[2].data],
          };
        });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get(`/api/tasks/${id}/signups/user`)
      .then((counts) => setSignups(counts.data))
      .catch((err) => console.error(err));
  }, [id]);

  const filterAvailable = (activeTasks, availableTasks) => {
    return availableTasks.filter(
      (task) => !activeTasks.find((activeTask) => task.id === activeTask.id)
    );
  };
  return (
    <div className={"backgrounduser"}>
      <Typography variant="h2" component="h2" className={"dashboardsection"}>
        <b>Your</b> tasks
      </Typography>
      <TaskTabs signups={signups} tasks={tasks} />
    </div>
  );
}
