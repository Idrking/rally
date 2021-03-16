import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Card,  CardHeader, CardContent, CardActions, Avatar, IconButton, Typography  } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import volunteerCardStyles from "../../styles/volunteerCardStyles";

export default function VolunteerCard() {
  const classes = volunteerCardStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}
          src="https://material-ui.com/static/images/avatar/1.jpg">
          </Avatar>
        }
        title="Larry Labber"
        subheader="Completed tasks: 5"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Experienced volunteer!
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
            Biography: did a lot of volunteer things
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
