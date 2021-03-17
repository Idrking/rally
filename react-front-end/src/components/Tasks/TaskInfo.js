import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TaskInfo({ tasks }) {

  const { id } = useParams();

  const [task, setTasks] = useState({
    id: null,
    name: null,
    description: null,
    start_date: null,
    end_date: null,
    spots: null,
    image_url: null,
    organization_id: null,
    location: null
  })
  useEffect(() => {
    axios.get(`/api/tasks/${id}`)

      .then(res => {
        console.log(res);
        setTasks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <TaskCard  task={task} />
    </div>
  );

}
