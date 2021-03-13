import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

function Tasks() {
  return (
    <Card elevation={10}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h2">Task</Typography>
          <Typography variant="body2">Task description</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Tasks;
