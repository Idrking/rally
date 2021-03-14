import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const TasksRouter = () => {
  return (
      <Switch>
        <Route path="/tasks/:id">
          Render a specific task
        </Route>
        <Route path="/tasks">
          <Redirect to="/" />
        </Route>
      </Switch>
  )
};

export default TasksRouter;