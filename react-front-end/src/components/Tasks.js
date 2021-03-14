import React from "react";

import { Grid } from "@material-ui/core";
import TaskContent from "./TaskContent";

function Tasks() {

  return (
    <Grid container direction="column">
      <br/>
      <br/>
      <Grid item container>
        {/* Gutter left side */}
        <Grid xs={0} sm={2}/>
        <Grid item xs={12} sm={10}>
          <TaskContent></TaskContent>
        </Grid>
        {/* Gutter right side */}
        <Grid xs={0} sm={2}/>
      </Grid>

    </Grid>
  );
}

export default Tasks;
