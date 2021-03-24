import { Divider, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import OrganizationsCards from "./OrganizationsCards";

export default function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    Axios.get("/api/organizations").then((res) => {
      setOrganizations(res.data);
    });
  }, []);
  return (
    <div className={"backgrounduser"}>
      <Typography
        variant="h2"
        component="h2"
        className={"dashboardsection"}
        gutterBottom
      >
        <b>Discover</b> organizations
      </Typography>
      <Divider />
      {organizations.map((org) => (
        <OrganizationsCards key={org.id} details={org} />
      ))}
    </div>
  );
}
