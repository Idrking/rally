import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from '../Landing/Landing';
import UsersRouter from './UsersRouter';
import OrganizationsRouter from './OrganizationsRouter';
import TaskRouter from './TaskRouter';
import LoginRouter from './LoginRouter';


const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" render={() => <UsersRouter />} />
        <Route path="/organizations" render={() => <OrganizationsRouter />} />
        <Route path="/tasks" render={() => <TaskRouter />} />
        <Route path="/login" render={() => <LoginRouter />} />
        <Route path="/" render={() =><Landing />} />
      </Switch>
    </Router>
  )
}

export default MainRouter;