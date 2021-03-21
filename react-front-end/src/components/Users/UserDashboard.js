import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Typography } from "@material-ui/core";
import Axios from "axios";
import "./Dashboard.scss";
import TaskTabs from "./TaskTabs";

export default function UserDashboard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState({ active: [], available: [], completed:[] });

  useEffect(() => {
    Promise.all([
      Axios.get(`/api/signup/${id}`),
      Axios.get(`/api/signup/${id}/available`),
      Axios.get(`/api/signup/${id}/completed`)
    ])
      .then((all) => {
        setTasks((prev) => {
          return { ...prev, active: [...all[0].data], available: [...all[1].data], completed: [...all[2].data] };
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
