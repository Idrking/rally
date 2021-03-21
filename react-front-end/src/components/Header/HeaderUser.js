import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  makeStyles,
  Avatar,
  Link,
} from "@material-ui/core";
import UserContext from "../../contexts/UserContext";
import "../../styles/HeaderUser.css";
import SortIcon from "@material-ui/icons/Sort";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function Header() {
  const { userState } = useContext(UserContext);

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

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
            <SortIcon
              style={{ color: "#6D7E73", fontSize: 35 }} />
          </IconButton>

          <div>
            <Avatar
              src="https://i.ibb.co/2ssp8r7/2.jpg"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ border: "3px solid #B6C7C3"}}
            />
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
              {/* <MenuItem onClick={handleClose} className={classes.menuitem}>
                My Account
              </MenuItem> */}
              <MenuItem onClick={handleClose} className={classes.menuitem}>
                My Organizations
              </MenuItem>

              <MenuItem
                onClick={handleClose}
                className={classes.menuitem}
                component={Link}
                to="/organizations"
              >
                Find Organization
              </MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
