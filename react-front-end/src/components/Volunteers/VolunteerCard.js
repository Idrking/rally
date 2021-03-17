import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@material-ui/core";
import { MailOutlineSharp } from "@material-ui/icons/";
import volunteerCardStyles from "../../styles/volunteerCardStyles";

export default function VolunteerCard({ volunteer }) {
  // card animation
  const classes = volunteerCardStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.flex}>
        <div className="avatardiv">
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={4}
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

            <ListItem button>
              <ListItemIcon>
                <MailOutlineSharp />
              </ListItemIcon>
              <ListItemText primary={volunteer.email} />
            </ListItem>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
