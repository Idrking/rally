import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import HeaderOrgDashboard from "../Header/HeaderOrgDashboard";
import ManagingVolunteers from "../ManagingVolunteers";
import PendingVolunteers from "../PendingVolunteers";
import OrganizationDashboard from "../OrganizationDashboard";
import OrganizationInfo from "../OrganizationInfo";
import Organizations from "../Organizations";
import Volunteers from "../Volunteers";

const OrganizationsRouter = () => {
  return (
    <Switch>
      <Route
        path="/organizations/:id/volunteers"
        render={() => {
          return (
            <>
              <Header />
              <Volunteers />
            </>
          );
        }}
      />

      {/* Dashboard for specific org's owner, can create new tasks or manage volunteers */}
      <Route
        path="/organizations/:id/dashboard"
        render={() => {
          return (
            <>
              <HeaderOrgDashboard />
              <OrganizationDashboard />
            </>
          );
        }}
      />

      <Route
        path="/organizations/:id/manage_volunteers"
        render={() => {
          return (
            <>
              <Header />
              <ManagingVolunteers />
            </>
          );
        }}
      />

      <Route
        path="/organizations/:id/pending_volunteers"
        render={() => {
          return (
            <>
              <Header />
              <PendingVolunteers />
            </>
          );
        }}
      />

      {/* Anyone can see; info about org, button to join/submit application */}
      <Route
        path="/organizations/:id/"
        render={() => {
          return (
            <>
              <Header />
              <OrganizationInfo />
            </>
          );
        }}
      />
      {/* List of all orgs that a user can browse */}
      <Route
        path="/organizations"
        render={() => {
          return (
            <>
              <Header />
              <Organizations />
            </>
          );
        }}
      />
    </Switch>
  );
};

export default OrganizationsRouter;
