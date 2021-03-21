import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import UserContext from '../../contexts/UserContext';
import { Button, Menu, MenuItem, Grow, makeStyles} from '@material-ui/core';
import CompactOrgListItem from "./CompactOrgListItem";
import AddOrgButton from './AddOrgButton';
import NewOrgForm from './NewOrgForm';


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

export default function MyOrganizations() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orgs, setOrgs] = useState([]);
  const { userState } = useContext(UserContext);
  const classes = useStyles();

  useEffect(() => {

    if (userState.id) {
      Axios.get(`/api/users/${userState.id}/organizations/owns`)
      .then(res => setOrgs(res.data))
      .catch(err => console.error(err));
    }
  }, [userState])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
      {orgs.map(org => {
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