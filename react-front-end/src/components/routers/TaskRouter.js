import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import TaskInfo from "../Tasks/TaskInfo";

const TasksRouter = () => {
  return (
    <Switch>
      <Route
        path="/tasks/:id"
        render={() => {
          return (
            <>
              <Header />
              <TaskInfo />
            </>
          );
        }}
      />
      <Route path="/tasks" render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default TasksRouter;
