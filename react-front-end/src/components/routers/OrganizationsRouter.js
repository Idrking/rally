import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderUser from "../Header/HeaderUser";
import ManagingVolunteers from "../Volunteers/ManagingVolunteers";
import PendingVolunteers from "../Volunteers/PendingVolunteers";
import OrganizationDashboard from "../organizations/OrganizationDashboard";
import OrganizationInfo from "../organizations/OrganizationInfo";
import Organizations from "../organizations/Organizations";
import Volunteers from "../Volunteers/Volunteers";

const OrganizationsRouter = () => {
  return (
    <Switch>
      <Route
        path="/organizations/:id/volunteers"
        render={() => {
          return (
            <>
              <HeaderUser />
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
              <HeaderUser />
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
              {/* <Header /> */}
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
              <HeaderUser />
              <Organizations />
            </>
          );
        }}
      />
    </Switch>
  );
};

export default OrganizationsRouter;
