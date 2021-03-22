import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import { Link } from "react-router-dom";
import { People } from "@material-ui/icons/";
import Axios from "axios";
import TaskInfo from "./TaskInfo";

//dayjs config
dayjs.extend(utc);
dayjs.extend(timezone);

export default function TaskCard({ task, orgView, signups }) {
  const classes = organizationsCardsStyles();
  const markComplete = () => {
    Axios.patch(`/api/tasks/${task.id}/complete`)
      .then(() => {
        orgView((prev) => {
          const taskCompleted = prev.active.find((ele) => {
            return ele.id === task.id;
          });
          return {
            ...prev,
            active: [
              ...prev.active.filter((ele) =>
                ele.id === task.id ? false : true
              ),
            ],
            past: [...prev.past, taskCompleted],
          };
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Card
      className={classes.root}
      style={{ border: "none", boxShadow: "none" }}
    >
      <Link to={`/tasks/${task.id}`}>
        
        <CardActionArea className={classes.cardgrid}>
          <CardContent className={classes.cardflex}>
          <Typography
              className={classes.title}
              gutterBottom
              variant="h3"
              component="h2"
              align="left"
            >
              {task.name}
            </Typography>
            <section className={classes.sectionflex}>

            <Typography className={classes.date}>
                <b>{dayjs.tz(task.start_date).format("ddd MMM D, ")}</b>
                {dayjs.tz(task.start_date).format("h:mm A")}
              </Typography>
            <Badge
              invisible={signups ? false : true}
              overlap="circle"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              // COUNTER HERE!
              badgeContent={`${signups}/${task.spots}`}
              color="secondary"
            >
              <People color="primary" fontSize="large" />
 
            </Badge>
            </section>

            {orgView && (
              <Button size="small" color="primary" onClick={markComplete}>
                Mark Completed
              </Button>
            )}
            
          </CardContent>

          <CardMedia
            className={classes.media}
            image={
              task.image_url ? task.image_url : "http://placeimg.com/640/480"
            }
          />
        </CardActionArea>
      </Link>
    </Card>
  );
}
