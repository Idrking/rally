import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import UserContext from '../../contexts/UserContext';
import {  Button, Menu, MenuItem, Grow, makeStyles, Container} from '@material-ui/core';
import CompactOrgListItem from "./CompactOrgListItem";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

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

export default function OrganizationsJoined() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orgs, setOrgs] = useState([]);
  const { userState } = useContext(UserContext);
  const classes = useStyles();

  useEffect(() => {
    if (userState.id) {
        Axios.get(`/api/users/${userState.id}/organizations/`)
        .then(org => setOrgs(org.data))
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
    <Container>
       <MenuItem onClick={handleClick} className={classes.menuitem} >
          My Organizations
        </MenuItem>
      <Menu
        id="my-organizations"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Grow}
      >
        {orgs.map((org, index) => {
          return (
            <MenuItem key={20 + org.id + index} onClick={handleClose}>
              <CompactOrgListItem org={org} />
            </MenuItem>
          );
        })}
      <MenuItem
        onClick={handleClose}
        className={classes.menuitem}
      >
      <Button size="medium" type="button" variant="contained" color="primary" startIcon={<SearchIcon/>} style={{boxShadow: "none"}}>
        <Link to="/organizations" className={classes.menuLink}>   
        Find Organizations
        </Link>
      </Button>
      </MenuItem>
      </Menu>
    </Container>
  );
}
