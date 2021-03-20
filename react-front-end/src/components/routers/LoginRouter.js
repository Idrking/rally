import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "../Login-Register/LogIn";
import Register from "../Login-Register/Register";


const LoginRouter = () => {
  return (
    <Switch>
      <Route path="/login/register" render={() => {
        return (
          <>
            <Register />
          </>
        );
      }} />
      <Route path="/login" render={() => {
        return (
          <>

            <LogIn />
          </>
        );
      }} />
    </Switch>
  );
};

export default LoginRouter;