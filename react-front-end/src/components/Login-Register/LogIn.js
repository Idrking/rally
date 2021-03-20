import React, { useContext } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, TextField, Link,   Typography,  } from '@material-ui/core';
import logInStyles from "../../styles/logInStyles.js";
import UserContext from "../../contexts/UserContext";

import "../Landing/Landing.scss";
import "./login.scss"




export default function LogIn() {
  const classes = logInStyles();
  const history = useHistory();
  const { setUserState } = useContext(UserContext);

  const loginFaker = (event) => {
    event.preventDefault();
    axios.get("/api/login/1")
      .then(() => {
        setUserState(prev => {
          return { ...prev, id: 1, name: "Gabe" };
        });
        history.push("/users/1");
      })
      .catch(err => console.error(err));
  };

  return (
    <div ClassName={"background-div"}>
      <div className={"title-div"}>
      <div>
      <Typography variant="h1" className="rally-title2">
        Rally
      </Typography>
      <Typography variant="body1" className="rally-subtitle2">
        Building community
      </Typography>
      <Typography variant="body1" className="rally-subtitle2">
        through volunteering
      </Typography>
    </div>        <form className={classes.form} noValidate>
          <TextField

            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField

            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit2}
            onClick={(event) => loginFaker(event)}
          >
            Sign In
          </Button>
          <Link href="/login/register" variant="body1" className={classes.regQuestion}>
            Don't Have An Account With Us? <span style={{color: "#6D7E73", fontWeight: 700}}>Register Now</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
