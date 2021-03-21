import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import { Typography, Button } from "@material-ui/core";
import Axios from "axios";
import "./UserDashboard.scss";
import TaskTabs from "./TaskTabs";

export default function UserDashboard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState({ active: [], available: [] });

  useEffect(() => {
    Promise.all([
      Axios.get(`/api/signup/${id}`),
      Axios.get(`/api/signup/${id}/available`),
    ])
      .then((all) => {
        setTasks((prev) => {
          return { ...prev, active: [...all[0].data] };
        });
        setTasks((prev) => {
          return { ...prev, available: [...all[1].data] };
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={"backgrounduser"}>
      <Typography variant="h2" component="h2" className={"yourtasks"}>
        Your <b>tasks</b>
      </Typography>
      <TaskTabs tasks={tasks} />
    </div>
  );
}
