import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { 
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@material-ui/core";
import { MailOutlineSharp } from "@material-ui/icons/";
import volunteerCardStyles from "../../styles/volunteerCardStyles";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContentModal from "../helperComponents/ContentModal";
import VolunteerApplication from "../Volunteers/VolunteerApplication";

export default function VolunteerCard({ volunteer, pending }) {
  // card animation
  const classes = volunteerCardStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

