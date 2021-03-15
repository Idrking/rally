import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import UserContext from "../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  name: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const { userState } = useContext(UserContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <span>{userState.id && <p> {userState.name}</p>}</span>
          <Typography className={classes.title}>📣 Rally!</Typography>
          <Button color="inherit">
            My Organizations
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
