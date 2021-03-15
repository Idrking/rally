import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HeaderUser from '../HeaderUser';
import UserDashboard from '../UserDashboard';

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