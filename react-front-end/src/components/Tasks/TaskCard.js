import React from "react";
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

export default function TaskCard({ task }) {
  const classes = organizationsCardsStyles();


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
            <ListItemText primary={"Start date"}  secondary={task.start_date}  />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CalendarTodayIcon className={classes.calendaricon2}/>
            </ListItemIcon>
            <ListItemText primary={"End date"} secondary={task.end_date} />
          </ListItem>

        </CardContent>
      </CardActionArea></Link>
      <CardActions>
        <Button size="medium" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
