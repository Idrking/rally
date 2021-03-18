import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import UserContext from "../../contexts/UserContext";
import MyOrganizations from "./MyOrganizations";


export default function Header() {
  const { userState } = useContext(UserContext);
  return <AppBar position="static">
    <Toolbar>
      { userState.id && <p>{userState.name}</p>}
      <Typography>
        Rally header
      </Typography>
      {userState.id && <MyOrganizations />}
    </Toolbar>
  </AppBar>
}
