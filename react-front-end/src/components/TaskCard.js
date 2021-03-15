import React from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import taskCardStyles from '../styles/taskCardStyles';



export default function TaskCard() {
  const classes = taskCardStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          TASK
        </Typography>
        <Typography variant="body2" component="p">
          Description of Task
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Mark Complete</Button>
      </CardActions>
    </Card>
  );
}