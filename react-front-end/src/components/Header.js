import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";

function Header() {

  return <AppBar position="static">
    <Toolbar>
      <Typography>
        This is our header
      </Typography>
    </Toolbar>
  </AppBar>
}

export default Header;
