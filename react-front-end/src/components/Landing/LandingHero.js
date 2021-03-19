import React from "react";
import { Typography } from "@material-ui/core";
import "./Landing.scss";

export default function LandingHero() {
  return (
    <div>
      <Typography variant="h1" className="rally-title">
        Rally
      </Typography>
      <Typography variant="body1" className="rally-subtitle">
        Building community
      </Typography>
      <Typography variant="body1" className="rally-subtitle">
        through volunteering
      </Typography>
    </div>
  );
}
