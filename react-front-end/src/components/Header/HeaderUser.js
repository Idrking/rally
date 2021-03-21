import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import UserContext from "../../contexts/UserContext";
import "../../styles/HeaderUser.css";
import SortIcon from "@material-ui/icons/Sort";
import MyOrganizations from './MyOrganizations';
import { Link } from 'react-router-dom';

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
  menuLink: {
    fontSize: 'inherit',
    color: 'inherit',
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'none'
    }
  }
  
}));

export default function Header() {
  const { userState } = useContext(UserContext);

  const classes = useStyles();

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
            <SortIcon
              style={{ color: "#6D7E73", fontSize: 35 }} />
          </IconButton>

          <div>
            <Avatar
              src={userState.profile_image}
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

              <MyOrganizations />

              <MenuItem
                onClick={handleClose}
                className={classes.menuitem}
              >
                <Link to="/organizations" className={classes.menuLink}>   
                Find Organizations
                </Link>
              </MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
