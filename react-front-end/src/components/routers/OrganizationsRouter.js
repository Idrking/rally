import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header';
import Organizations from '../Organizations';

const OrganizationsRouter = () => {
  return (
      <Switch>
        <Route path="/organizations/:id/volunteers" render={() => {
          return (
            <>
              <Header />
              Show volunteer management page for organized:id
            </>
          );
        }} />
        <Route path="/organizations/:id" render={() => {
          return (
            <>
              <Header />
              <Organizations></Organizations>
            </>
          );
        }}/>
        <Route path="/organizations" render={() => {
          return (
            <>
              <Header />
              Show all the organizations
            </>
          );
        }}/>
      </Switch>
  )
};

export default OrganizationsRouter;