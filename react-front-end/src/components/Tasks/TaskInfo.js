import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
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
import ListIcon from "@material-ui/icons/List";
import UserContext from "../../contexts/UserContext";


export default function TaskInfo() {
  const { userState } = useContext(UserContext);
  const { id } = useParams();
  const classes = organizationsCardsStyles();
  const [showJoin, setShowJoin] = useState(true);

  const [task, setTasks] = useState({
    name: null,
    description: null,
    start_date: null,
    end_date: null,
    spots: null,
    image_url: null,
    organization_id: null,
    location: null,
    signups: []
  });
  useEffect(() => {
    axios
      .get(`/api/tasks/${id}`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "add") {
        if (task.signups.find(signup => !(signup.id === message.id))) {
          setTasks(prev => {
            return {...prev, signups: [...message.signup]}
          });
        }      
      }

      if (message.type === "delete") {
        setTasks(prev => {
          return {...prev, signups: [...prev.signups.filter(signup => userState.id !== signup.id)]}
        });
      }
    };
    return function () { webSocket.close() };
  }, [task]);

  const joinShouldShow = (userID, task) => {
    const currentSignupIDs = task.signups.map(signup => signup.id);    
    return !currentSignupIDs.includes(userID)
  }


  const createSignUp = function () {  
    const url = `/api/signup/${id}/${userState.id}`;
    axios.put(url)
  };

  const cancelSignUp = function () {
    const url = `/api/signup/${id}/1`;
    axios.delete(url)
  };

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
                badgeContent={`${task.signups.length}/${task.spots}`}
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
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={"list of all people signed"} />
          </ListItem>
        </List>
        {showJoin && joinShouldShow(userState.id, task) ? (
          <Button
            variant="contained"
            aria-label="increase"
            disabled={ task.signups.length === task.spots}
            onClick={() => {
              setShowJoin(false);
              createSignUp();
            }}
          >
            Join Task
          </Button>
        ) : (
          <Button
            variant="contained"
            aria-label="reduce"
            onClick={() => {
              setShowJoin(true);
              cancelSignUp()
            }}
          >
            Cancel Task
          </Button>
        )}{" "}
        <Link to={`/users/${userState.id}`}>
          <Button
            size="medium"
            color="primary"
            variant="contained"
          >
            Back to Dashboard
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
