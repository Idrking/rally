import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from '../Header';
import LogIn from "../LogIn";
import SignUp from "../SignUp";

const LoginRouter = () => {
  return (
      <Switch>
        <Route path="/login/register">
          <>
            <Header />
            <SignUp />
          </>
        </Route>
        <Route path="/login">
          <>
            <Header />
            <LogIn />
          </>
        </Route>
      </Switch>
  )
};

export default LoginRouter;