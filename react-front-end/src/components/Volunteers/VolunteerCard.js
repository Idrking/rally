import React from "react";
import clsx from "clsx";
import {
  Collapse,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Add from "@material-ui/icons/Add";
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
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            src={volunteer.profile_image_url}
          ></Avatar>
        }
        title={volunteer.first_name}
        subheader={volunteer.last_name}
      />

      <CardContent>
        <Typography variant="h6" color="textSecondary" component="h4">
          {volunteer.first_name} {volunteer.last_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h4">
          {"Email: "} {volunteer.email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add">
          <Add />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
          <Typography paragraph>
            {"Email: "} {volunteer.email}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
