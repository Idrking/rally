import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import UserContext from '../../contexts/UserContext';
import { Button, Menu, MenuItem, Grow} from '@material-ui/core';
import CompactOrgListItem from "./CompactOrgListItem";

export default function MyOrganizations() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orgs, setOrgs] = useState([]);
  const { userState } = useContext(UserContext);

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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        My Organizations
      </Button>
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
      </Menu>
    </div>
  );
}