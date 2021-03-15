import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, Card,  CardHeader, CardContent, CardActions, Avatar, IconButton, Typography  } from '@material-ui/core';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "auto",
    marginTop: "100"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VolunteerCard() {
  const classes = useStyles();
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

// tasks that are available
// 