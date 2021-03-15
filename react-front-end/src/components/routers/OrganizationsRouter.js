import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header';
import HeaderOrgDashboard from '../HeaderOrgDashboard';
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
        {/* Dashboard that an org owner can see, create new tasks or manage volunteers */}
        <Route path="/organizations/:id/" render={() => {
          return (
            <>
              <HeaderOrgDashboard />
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