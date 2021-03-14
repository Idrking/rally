import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const OrganizationsRouter = () => {
  return (
      <Switch>
        <Route path="/organizations/:id/volunteers">
          Show volunteer management page for organized:id
        </Route>
        <Route path="/organizations/:id">
          Show dashboard for specific organizations
        </Route>
        <Route path="/organizations">
          Show all the organizations
        </Route>
      </Switch>
  )
};

export default OrganizationsRouter;