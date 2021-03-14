import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from '../Header';
import Tasks from '../Tasks';

const TasksRouter = () => {
  return (
      <Switch>
        <Route path="/tasks/:id">
          <>
            <Header />
            <Tasks />
          </>
        </Route>
        <Route path="/tasks">
          <Redirect to="/" />
        </Route>
      </Switch>
  )
};

export default TasksRouter;