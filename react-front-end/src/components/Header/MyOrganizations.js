import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import UserContext from "../../contexts/UserContext";
import { Button, Menu, MenuItem, Grow, IconButton } from "@material-ui/core";
import CompactOrgListItem from "./CompactOrgListItem";
import AddOrgButton from "./AddOrgButton";
import NewOrgForm from "./NewOrgForm";
import SortIcon from "@material-ui/icons/Sort";

export default function MyOrganizations() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orgs, setOrgs] = useState([]);
  const { userState } = useContext(UserContext);

  useEffect(() => {
    if (userState.id) {
      Axios.get(`/api/users/${userState.id}/organizations/owns`)
        .then((res) => setOrgs(res.data))
        .catch((err) => console.error(err));
    }
  }, [userState]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SortIcon style={{ color: "#6D7E73", fontSize: 35 }} />
      </IconButton>
      <Menu
        id="my-organizations"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Grow}
      >
        {orgs.map((org) => {
          return (
            <MenuItem key={org.id} onClick={handleClose}>
              <CompactOrgListItem org={org} />
            </MenuItem>
          );
        })}
        <MenuItem key="add">
          <AddOrgButton FormComponent={NewOrgForm} />
        </MenuItem>
      </Menu>
    </div>
  );
}
