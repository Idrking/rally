import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";
import UserContext from "../../contexts/UserContext";
import "../../styles/HeaderUser.css";
import { Sort } from "@material-ui/icons";
import MyOrganizations from "./MyOrganizations";
import OrganizationsJoined from "./OrganizationsJoined";
import { Link } from 'react-router-dom';

export default function Header() {
  const { userState } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "#F5F5F5", boxShadow: "none", padding: 15 }}
      >
        <Toolbar>
          <IconButton edge="start" aria-label="menu" onClick={handleMenu}>
            <Sort style={{ color: "#6D7E73", fontSize: 35 }} />
          </IconButton>

          <div>
            <Link to={`/users/${userState.id}`}>
              <Avatar
                src={userState.profile_image}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{ border: "3px solid #B6C7C3" }}
              />
            </Link>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {/* For some reason, removing this MenuItem causes an error 
                  It's pretty ugly, but it works */}
              <MenuItem style={{ display: "none" }} />

              <MyOrganizations />
              <OrganizationsJoined />
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
