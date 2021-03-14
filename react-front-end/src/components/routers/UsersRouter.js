import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const UsersRouter = () => {
  return (
      <Switch>
        <Route path="/users/:id">
          Render a specific user
        </Route>
        <Route path="/users">
          <Redirect to="/" />
        </Route>
      </Switch>
  )
};

export default UsersRouter;