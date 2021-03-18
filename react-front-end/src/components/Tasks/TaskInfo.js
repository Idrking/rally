import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Badge,
  Button,
} from "@material-ui/core";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import { PeopleSharp } from "@material-ui/icons/";

export default function TaskInfo() {
  const { id } = useParams();
  const classes = organizationsCardsStyles();

  const [task, setTasks] = useState({
    name: null,
    description: null,
    start_date: null,
    end_date: null,
    spots: null,
    image_url: null,
    organization_id: null,
    location: null,
  });
  useEffect(() => {
    axios
      .get(`/api/tasks/${id}`)
      .then((res) => {
        setTasks(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <Card className={classes.root}>
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
        <Typography color="inherit" variant="body1" component="p" align="left">
          {task.description}
        </Typography>

        <List>
          {/* Counter */}
          <ListItem>
            <ListItemIcon>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // COUNTER HERE!
                badgeContent={4}
                color="primary"
              >
                <PeopleSharp />
              </Badge>
            </ListItemIcon>
            <ListItemText primary={"number of signups"} />
          </ListItem>

          {/* List of people */}

          <ListItem>
            <ListItemIcon>
              <PeopleSharp />
            </ListItemIcon>
            <ListItemText primary={"list of all people signed"} />
          </ListItem>
        </List>

        <Button
          size="medium"
          color="primary"
          variant="contained"
          href={`/users/${id}`}
        >
          Back to Dashboard
        </Button>
      </CardContent>
    </Card>
  );
}
