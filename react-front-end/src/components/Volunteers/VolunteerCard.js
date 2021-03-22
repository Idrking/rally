import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { 
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import volunteerCardStyles from "../../styles/volunteerCardStyles";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContentModal from "../helperComponents/ContentModal";
import VolunteerApplication from "../Volunteers/VolunteerApplication";

export default function VolunteerCard({ volunteer, pending }) {
  // card animation
  const classes = volunteerCardStyles();
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    axios.get(`/api/signup/${volunteer.id}/history`)
    .then(res => setExperience(res.data.count))
    .catch(err => console.error(err));
  })

  const appFormButton = (clickHandler) => {
    return (
      <Button
        variant="contained"
        color="primary"
        startIcon={<EmojiPeopleIcon />}
        onClick={clickHandler}
      >
        View application
      </Button>
    )};

  return (
    <Card className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.avatardiv}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={experience}
            color="primary"
          >
            <Avatar
              className={classes.media}
              src={volunteer.profile_image_url}
            />
          </Badge>
        </div>

        <div className="textdiv">
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              component="h4"
              align="left"
            >
              {volunteer.first_name} {volunteer.last_name}
            </Typography>

            <ListItem button disableGutters>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText secondary={volunteer.email} />
            </ListItem>
            {pending && <ContentModal 
              data={volunteer}
              FormComponent={VolunteerApplication}
              buttonFunc={appFormButton}
            />}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

