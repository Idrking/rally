import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Typography } from '@material-ui/core'
import Landing from '../Landing';
import UsersRouter from './UsersRouter';
import OrganizationsRouter from './OrganizationsRouter';
import TaskRouter from './TaskRouter';
import Header from "../Header"

const MainRouter = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/users">
          <UsersRouter />
        </Route>
        <Route path="/organizations">
          <OrganizationsRouter />
        </Route>
        <Route path="/tasks">
          <TaskRouter />
        </Route>
        <Route path="/">
          <Header />
          <Landing></Landing>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter;