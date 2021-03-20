import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import UserDashboard from '../Users/UserDashboard';

const UsersRouter = () => {
  return (
      <Switch>
        <Route path="/users/:id" render={() => {
          return (
            <>
              <Header />
              <UserDashboard />
            </>
          );
        }} />
        <Route path="/users" render={() => <Redirect to="/" />} />
      </Switch>
  )
};

export default UsersRouter;