import { Grid } from '@material-ui/core';
import React from 'react';
import TaskCard from './TaskCard';

function TaskContent() {
  return (
    <Grid item container spacing={4}>
      <Grid item xs={12} sm={10}>
        <TaskCard />
      </Grid>
      <Grid item xs={12} sm={10}>
        <TaskCard />
      </Grid>
    </Grid>
  );
}

export default TaskContent;