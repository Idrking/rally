import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Typography } from '@material-ui/core'
import Landing from '../Landing';
import UsersRouter from './UsersRouter';
import OrganizationsRouter from './OrganizationsRouter';
import TaskRouter from './TaskRouter';

const MainRouter = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/users" component={withRouter(UsersRouter)} />
        <Route path="/organizations">
          <OrganizationsRouter />
        </Route>
        <Route path="/tasks">
          <TaskRouter />
        </Route>
        <Route path="/">
          <Typography variant="h1">Rally</Typography>
          <Landing></Landing>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter;