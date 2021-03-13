import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Landing';
import { Typography } from '@material-ui/core'

const MainRouter = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/users">
          <h1>USERS</h1>
        </Route>
        <Route path="/organizations">
          pages relating to organizations
        </Route>
        <Route path="/tasks">
          pages relating to tasks
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