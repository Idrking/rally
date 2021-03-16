import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from '../Header';
import LogIn from "../LogIn";
import Register from "../Register";


const LoginRouter = () => {
  return (
      <Switch>
        <Route path="/login/register" render={() => {
          return (
          <>
            <Header />
            <Register />
          </>
          )
        }} />
        <Route path="/login" render ={() => {
          return (
          <>
            <Header />
            <LogIn />
          </>
          )
        }} />
      </Switch>
  )
};

export default LoginRouter;