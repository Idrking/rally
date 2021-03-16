import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import UserContext from "../contexts/UserContext";
import "../styles/HeaderUser.css";

export default function Header() {
  const { userState } = useContext(UserContext);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <span>Hi {userState.id && <p> {userState.name}</p>}</span>
          </div>

          <Typography>
            <span role="img" aria-label="megaphone">
              📣{" "}
            </span>
            Rally!
          </Typography>

          <Button color="inherit">My Organizations</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
