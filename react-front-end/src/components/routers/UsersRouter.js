import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HeaderUser from "../Header/HeaderUser";
import UserDashboard from '../Users/UserDashboard';

const UsersRouter = () => {
  return (
      <Switch>
        <Route path="/users/:id" render={() => {
          return (
            <>
              <HeaderUser />
              <UserDashboard />
            </>
          );
        }} />
        <Route path="/users" render={() => <Redirect to="/" />} />
      </Switch>
  )
};

export default UsersRouter;