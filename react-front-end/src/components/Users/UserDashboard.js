import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import { Typography, Button } from "@material-ui/core";
import Axios from "axios";

export default function UserDashboard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState({active: [], available: []})
  
  useEffect(() => {
    Promise.all([
      Axios.get(`/api/signup/${id}`),
      Axios.get(`/api/signup/${id}/available`)
    ]).then(all => {
        setTasks(prev => {return {...prev, active:[...all[0].data]}});
        setTasks(prev => {return {...prev, available:[...all[1].data]}});
    })
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div>
      <br />
      <Typography variant="h4" component="h2">
        Available tasks
      </Typography>
      <Tasks tasks={tasks.available}/>
      <br />
      <Typography variant="h4" component="h2">
        Active tasks
      </Typography>
      <Tasks tasks={tasks.active}/>
      <br />
      <Link to="/organizations">
        <Button type="submit" variant="contained" color="primary" >
          Find Organizations
        </Button>
      </Link>
    </div>
  );
}
