import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from '../Header';

const UsersRouter = () => {
  return (
      <Switch>
        <Route path="/users/:id">
          <>
            <Header />
            Render a specific users dashboard
          </>
        </Route>
        <Route path="/users">
          <Redirect to="/" />
        </Route>
      </Switch>
  )
};

export default UsersRouter;