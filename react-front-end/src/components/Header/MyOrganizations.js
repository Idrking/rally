import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import UserContext from "../../contexts/UserContext";
import {
  Menu,
  MenuItem,
  Grow,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import CompactOrgListItem from "./CompactOrgListItem";
import AddOrgButton from "./AddOrgButton";
import NewOrgForm from "./NewOrgForm";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuitem: {
    fontSize: 17,
  },
}));

export default function MyOrganizations() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orgs, setOrgs] = useState([]);
  const { userState } = useContext(UserContext);
  const classes = useStyles();

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
      <MenuItem onClick={handleClick} className={classes.menuitem}>
        Managed Organizations
      </MenuItem>
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
            <MenuItem key={0 + parseInt(org.id)} onClick={handleClose}>
              <CompactOrgListItem owner org={org} />
            </MenuItem>
          );
        })}
                      <Divider></Divider>
        <MenuItem>
          <AddOrgButton FormComponent={NewOrgForm} />
        </MenuItem>
      </Menu>
    </div>
  );
}
