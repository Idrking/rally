import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import UserContext from "../contexts/UserContext";


function Header() {
  const { userState } = useContext(UserContext);
  return <AppBar position="static">
    <Toolbar>
      { userState.id && <p>{userState.name}</p>}
      <Typography>
        Rally header
      </Typography>
    </Toolbar>
  </AppBar>
}

export default Header;
