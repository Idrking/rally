import React, { useContext } from "react";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";
import UserContext from "../../contexts/UserContext";
import MyOrganizations from "./MyOrganizations";
import { Link } from "react-router-dom";

export default function Header() {
  const { userState } = useContext(UserContext);
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#F5F5F5",
        color: "#4B6253",
        boxShadow: "none",
        // padding: 15,
      }}
    >
      <Toolbar>
        {/* {userState.id && <p>{userState.name}</p>} */}
        {userState.id && <MyOrganizations />}
        {userState.id && (
          <Link to={`/users/${userState.id}`}>
            <Avatar
              src="https://i.ibb.co/2ssp8r7/2.jpg"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ border: "3px solid #B6C7C3", opacity: 0.8 }}
            />
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
