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
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";
import InfoStyles from "../../styles/InfoStyles";
import { PeopleSharp } from "@material-ui/icons/";
import UserContext from "../../contexts/UserContext";
import "./TaskInfo.scss";
import DateRangeIcon from "@material-ui/icons/DateRange";
import dayjs from "dayjs";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function TaskInfo() {
  const { userState } = useContext(UserContext);
  const { id } = useParams();
  const classes = InfoStyles();
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
      <Link to={`/users/${userState.id}`}>
        <IconButton className={classes.backButton}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </Link>
      <img src={task.image_url} className={classes.bkgImage}></img>

      <Card className={classes.InfoCard}>
        <CardContent className={classes.CardContent}>
          <section>
            <Typography className={classes.cardSubtitle} gutterBottom>
              Organization Name
            </Typography>
            <Typography
              color="primary"
              variant="h2"
              component="h2"
              className={classes.cardName}
            >
              {task.name}
            </Typography>

            <Divider style={{ margin: "3vh 0" }} />

            {/* * * * HACKY SOLUTION TO ADD BACKGROUND * * * */}
            {/* <ListItem>
              <ListItemIcon>
              <Avatar>
              <CalendarTodayIcon className={classes.taskicons} />
              </Avatar>
              </ListItemIcon>
              
              <ListItemText
              secondary={dayjs
                .tz(task.start_date)
                .format("ddd MMM D - h:mm A")}
                />
              </ListItem> */}

            <List>
              {/* <ListItem>
                <ListItemIcon>
                  <DateRangeIcon className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText
                  secondary={dayjs
                    .tz(task.end_date)
                    .format("ddd MMM D, h:mm A")}
                />
              </ListItem> */}

              <ListItem disableGutters>
                <ListItemIcon>
                  <DateRangeIcon className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#CFCFCF",
                      fontWeight: "normal",
                    }}
                  >
                    {/* <b style={{color: "#787878"}}>{dayjs.tz(task.start_date).format("ddd, MMM D ")}</b>
                    {dayjs.tz(task.start_date).format("hh:mmA")}
                    {" - "}
                    <b style={{color: "#787878"}}>{dayjs.tz(task.end).format("ddd, MMM D ")}</b>
                    {dayjs.tz(task.end).format("hh:mmA")} */}

                    <span style={{ color: "#787878" }}>
                      {dayjs.tz(task.start_date).format("hh:mma, ddd, MMM D")}
                    </span>
                    {" to  "}
                    <span style={{ color: "#787878" }}>
                      {dayjs.tz(task.end_date).format("hh:mma, ddd, MMM D")}
                    </span>
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon>
                  <LocationOnIcon className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText color="primary" secondary={task.location} />
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon>
                  <Badge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    // COUNTER HERE!
                    badgeContent={`${task.signups.length}/${task.spots}`}
                    color="secondary"
                  >
                    <PeopleSharp className={classes.infoIcons} />
                  </Badge>
                </ListItemIcon>
                <ListItemText secondary={"Volunteers signed up"} />
              </ListItem>
            </List>

            {/* <Divider style={{margin: "2vh 0"}} /> */}

            <Typography gutterBottom className={classes.description}>
              Description:
            </Typography>
            <Typography variant="body2" component="p">
              {task.description}
            </Typography>
          </section>
        </CardContent>
      </Card>

      {showJoin && joinShouldShow(userState.id, task) ? (
        <Button
          variant="contained"
          aria-label="increase"
          disabled={task.signups.length === task.spots}
          onClick={() => {
            setShowJoin(false);
            createSignUp();
          }}
          className={classes.buttonRound}
        >
          <AddIcon fontSize="large" style={{ color: "white" }} />
        </Button>
      ) : (
        <Button
          variant="contained"
          aria-label="reduce"
          onClick={() => {
            setShowJoin(true);
            cancelSignUp();
          }}
          className={classes.buttonRound}
        >
          <RemoveIcon fontSize="large" style={{ color: "white" }} />
        </Button>
      )}
    </div>
  );
}
