import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from '../Header';

const TasksRouter = () => {
  return (
      <Switch>
        <Route path="/tasks/:id">
          <>
            <Header />
            Render a specific task
          </>
        </Route>
        <Route path="/tasks">
          <Redirect to="/" />
        </Route>
      </Switch>
  )
};

export default TasksRouter;