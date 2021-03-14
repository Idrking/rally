import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const OrganizationsRouter = () => {
  return (
      <Switch>
        <Route path="/organizations/:id/volunteers">
          <>
            <Header />
            Show volunteer management page for organized:id
          </>
        </Route>
        <Route path="/organizations/:id">
          <>
            <Header />
            Show dashboard for specific organizations
          </>
        </Route>
        <Route path="/organizations">
          <>
            <Header />
            Show all the organizations
          </>
        </Route>
      </Switch>
  )
};

export default OrganizationsRouter;