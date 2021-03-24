import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
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
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function TaskInfo() {
  const { userState } = useContext(UserContext);
  const { id } = useParams();
  const classes = InfoStyles();
  const [showJoin, setShowJoin] = useState(true);
  const [org, setOrg] = useState({});
  const history = useHistory();

  const [task, setTasks] = useState({
    name: null,
    description: null,
    start_date: null,
    end_date: null,
    spots: null,
    image_url: null,
    organization_id: 1,
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
    axios.get(`/api/organizations/${task.organization_id}`)
    .then(res => setOrg(res.data.info[0]))
    .catch(err => console.error(err));
  }, [task]);

  useEffect(() => {
    const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    webSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "add") {
        setTasks((prev) => { return { ...prev, signups: [...message.signup] }})
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
        <IconButton className={classes.backButton} onClick={() => history.goBack() }>
          <ArrowBackIosIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      <img src={task.image_url} className={classes.bkgImage} alt="Background"></img>

      <Card className={classes.InfoCard}>
        <CardContent className={classes.CardContent}>
          <section>
            <Typography className={classes.cardSubtitle} gutterBottom>
              {org.name}
            </Typography>
            <Typography
              color="primary"
              variant="h2"
              component="h2"
              className={classes.cardName}
            >
              {task.name}
            </Typography>

            <Divider style={{ margin: "1vh 0" }} />

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

              <ListItem disableGutters dense>
                <ListItemIcon>
                  <DateRangeIcon className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {dayjs.tz(task.start_date).format("hh:mma, ddd, MMM D")}
                    <span style={{ color: "#CFCFCF", fontWeight: 300 }}>
                      {" "}
                      to{" "}
                    </span>
                    {dayjs.tz(task.end_date).format("hh:mma, ddd, MMM D")}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem disableGutters dense>
                <ListItemIcon>
                  <LocationOnIcon className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {task.location}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem disableGutters dense>
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
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {"Volunteers signed up"}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>

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
