import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header';
import OrganizationDashboard from "../OrganizationDashboard";
import Organizations from '../Organizations';
import Volunteers from '../Volunteers';

const OrganizationsRouter = () => {
  return (
      <Switch>
        <Route path="/organizations/:id/volunteers" render={() => {
          return (
            <>
              <Header />
              <Volunteers />
            </>
          );
        }} />
        <Route path="/organizations/:id" render={() => {
          return (
            <>
              <Header />
              <OrganizationDashboard />
            </>
          );
        }}/>
        <Route path="/organizations" render={() => {
          return (
            <>
              <Header />
              <Organizations />
            </>
          );
        }}/>
      </Switch>
  )
};

export default OrganizationsRouter;