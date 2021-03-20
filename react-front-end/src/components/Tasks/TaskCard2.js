import React from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
  CardMedia,
  ListItemIcon,
  ListItem,
  ListItemText
} from "@material-ui/core";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { Link } from "react-router-dom";
import Axios from "axios";

//dayjs config
dayjs.extend(utc);
dayjs.extend(timezone);


export default function TaskCard({ task, orgView }) {
  const classes = organizationsCardsStyles();
  
  const markComplete = () => {
    Axios.patch(`/api/tasks/${task.id}/complete`)
    .then(() => {
      orgView(prev => {
        const taskCompleted = prev.active.find(ele => {
          return ( ele.id === task.id)});
        return { ...prev,
          active: [...prev.active.filter(ele => ele.id === task.id ? false : true)],
          past: [...prev.past, taskCompleted]
        };
      })
    })
    .catch(err => console.error(err));
  }


  return (
      




    <Card className={classes.root}>
      <Link to={`/tasks/${task.id}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={task.image_url ? task.image_url : "http://placeimg.com/640/480"}
          title={task.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {task.name}
          </Typography>
          <Typography color="primary" component="h3" align="left">
            {task.location}
          </Typography>

          <ListItem button>
            <ListItemIcon >
              <CalendarTodayIcon className={classes.calendaricon} />
            </ListItemIcon>
            <ListItemText primary={"Start date"}  secondary={dayjs.tz(task.start_date).format('h:mm A ddd, MMM D')}  />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CalendarTodayIcon className={classes.calendaricon2}/>
            </ListItemIcon>
            <ListItemText primary={"End date"} secondary={dayjs.tz(task.end_date).format('h:mm A ddd, MMM D')} />
          </ListItem>

        </CardContent>
      </CardActionArea></Link>
      {orgView && 
      <CardActions>
        <Button size="medium" color="primary" onClick={markComplete}>
          Mark Completed
        </Button>
      </CardActions>}
    </Card>
  );
}
