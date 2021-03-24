import React from "react";
import { Button, Link, InputBase } from "@material-ui/core";
import registerStyles from "../../styles/registerStyles";
import "../Landing/Landing.scss";
import Hero from "../Landing/Hero";
import "./Register.scss";

export default function Register() {
  const classes = registerStyles();

  return (
    <div className={"background-div"}>
      <div className={"title-div"}>
        <Hero />

        <form className={classes.form} noValidate>
          <InputBase
            placeholder="First name"
            required
            fullWidth
            id="standard-basic"
            autoComplete="lname"
            className={classes.inputBase}
          />

          <InputBase
            placeholder="Last name"
            required
            fullWidth
            id="standard-basic"
            name="lastName"
            autoComplete="lname"
            className={classes.inputBase}
          />

          <InputBase
            placeholder="Email"
            required
            fullWidth
            id="standard-basic"
            autoComplete="lname"
            className={classes.inputBase}
          />

          <InputBase
            placeholder="Password"
            required
            fullWidth
            id="standard-basic"
            autoComplete="lname"
            className={classes.inputBase}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Link href="/login/" variant="body1" className={classes.regQuestion}>
            Already have an account?{" "}
            <span style={{ color: "#6D7E73", fontWeight: 700 }}>
              Sign in here.
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
