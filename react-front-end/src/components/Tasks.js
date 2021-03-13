import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(16),
    }
  },
  customBorderRadius: {
    borderRadius: 25
  }
}));

function Tasks() {
  const classes = useStyles();
  return (
    <Card elevation={10} className={classes.root}>
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
