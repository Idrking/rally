import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from '../Header/Header';
import LogIn from "../Login-Register/LogIn";
import Register from "../Login-Register/Register";


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