import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from '../Header';

const UsersRouter = () => {
  return (
      <Switch>
        <Route path="/users/:id" render={() => {
          return (
            <>
              <Header />
              Render a specific users dashboard
            </>
          );
        }} />
        <Route path="/users" render={() => <Redirect to="/" />} />
      </Switch>
  )
};

export default UsersRouter;