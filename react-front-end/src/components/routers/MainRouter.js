import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Typography } from '@material-ui/core'
import Landing from '../Landing';
import UsersRouter from './UsersRouter';
import OrganizationsRouter from './OrganizationsRouter';
import TaskRouter from './TaskRouter';
import LoginRouter from './LoginRouter';
import Header from "../Header"

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" render={() => <UsersRouter />} />
        <Route path="/organizations" render={() => <OrganizationsRouter />} />
        <Route path="/tasks" render={() => <TaskRouter />} />
        <Route path="/login" render={() => <LoginRouter />} />
        <Route path="/" render={() => <><Header /><Landing /></>} />
      </Switch>
    </Router>
  )
}

export default MainRouter;