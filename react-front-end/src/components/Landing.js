import React from 'react';
import Button from '@material-ui/core/button';
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
function Landing() {
  return (

    <div>
      <Typography variant="h1">Rally</Typography>
      <Link to="/login">
        <Button variant="contained" color="primary">Log In</Button>
      </Link>
      <Link to="/login/register">
        <Button variant="contained" color="primary">Register</Button>
      </Link>
    </div>

  );
}

export default Landing;