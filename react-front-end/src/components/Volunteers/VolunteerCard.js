import React from "react";
import clsx from "clsx";
import {
  Collapse,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  CardMedia,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Add, MailOutlineSharp } from "@material-ui/icons/";
import volunteerCardStyles from "../../styles/volunteerCardStyles";

export default function VolunteerCard({ volunteer }) {
  // card animation
  const classes = volunteerCardStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.flex}>

        <div className="avatardiv">
          <Avatar className={classes.media} src={volunteer.profile_image_url} />
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
