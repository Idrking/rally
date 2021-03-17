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
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

export default function TaskCard({ task }) {
  const classes = organizationsCardsStyles();
  return (
    // <Card className={classes.root}>
    //   <CardContent>
    //     <Typography className={classes.title} color="textSecondary" gutterBottom>
    //       {task && task.name}
    //     </Typography>
    //     <Typography variant="body2" component="p">
    //       {task && task.description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" >Mark Complete</Button>
    //   </CardActions>
    // </Card>

    <Card className={classes.root}>
      <CardActionArea href={`/tasks/${task.id}`}>
        <CardMedia
          className={classes.media}
          image={task.image_url}
          title={task.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {task.name}
          </Typography>
          <Typography color="primary" component="h3" align="left">
            {task.location}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="left"
          >
            {task.description}
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
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Join
        </Button>
        <Button
          target="_blank"
          href={task.website}
          size="medium"
          color="primary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
