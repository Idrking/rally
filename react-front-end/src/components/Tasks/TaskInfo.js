import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Typography,
  CardContent,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Badge,
  CardMedia,
  Button,
  IconButton,
} from "@material-ui/core";
import taskInfoStyles from "../../styles/taskInfoStyles";
import { PeopleSharp } from "@material-ui/icons/";
import ListIcon from "@material-ui/icons/List";
import UserContext from "../../contexts/UserContext";
import "./TaskInfo.scss";
import DateRangeIcon from "@material-ui/icons/DateRange";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function TaskInfo() {
  const { userState } = useContext(UserContext);
  const { id } = useParams();
  const classes = taskInfoStyles();
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
    signups: [],
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
        if (task.signups.find((signup) => !(signup.id === message.id))) {
          setTasks((prev) => {
            return { ...prev, signups: [...message.signup] };
          });
        }
      }

      if (message.type === "delete") {
        setTasks((prev) => {
          return {
            ...prev,
            signups: [
              ...prev.signups.filter((signup) => userState.id !== signup.id),
            ],
          };
        });
      }
    };
    return function () {
      webSocket.close();
    };
  }, [task]);

  const joinShouldShow = (userID, task) => {
    const currentSignupIDs = task.signups.map((signup) => signup.id);
    return !currentSignupIDs.includes(userID);
  };

  const createSignUp = function () {
    const url = `/api/signup/${id}/${userState.id}`;
    axios.put(url);
  };

  const cancelSignUp = function () {
    const url = `/api/signup/${id}/1`;
    axios.delete(url);
  };

  return (
    <div className={classes.root}>
      {/* <IconButton>
        <ArrowBackIosIcon style={{ color: "white", fontSize: 20 }} />
      </IconButton> */}

      <img src={task.image_url} className={classes.orgTaskImage}></img>

      <Card className={classes.InfoCard}>
        <CardContent className={classes.CardContent} >
          <Typography className={classes.orgName}>
            Organization Name
          </Typography>
          <Typography
            color="primary"
            gutterBottom
            variant="h4"
            component="h2"

          >
            {task.name}
          </Typography>
          <Typography
            color="primary"
            gutterBottom
            variant="h4"
            component="h2"

          >
            Description:
          </Typography>
          <Typography
            color="inherit"
            variant="body1"
            component="p"

          >
            {task.description}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <DateRangeIcon className={classes.dateRange}></DateRangeIcon>
              </ListItemIcon>
              <ListItemText
                color="primary"
                primary={dayjs.tz(task.start_date).format("h:mm A ddd, MMM D")}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon className={classes.locationIcon} />
              </ListItemIcon>
              <ListItemText color="primary" primary={task.location} />
            </ListItem>

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
          </List>
          {showJoin && joinShouldShow(userState.id, task) ? (
            <Button
              variant="contained"
              aria-label="increase"
              disabled={task.signups.length === task.spots}
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
                cancelSignUp();
              }}
            >
              Cancel Task
            </Button>
          )}{" "}
          <Link to={`/users/${userState.id}`}>
            <Button size="medium" color="primary" variant="contained">
              Back to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
