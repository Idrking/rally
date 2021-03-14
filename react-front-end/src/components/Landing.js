import React from 'react';
import Button from '@material-ui/core/button';

function Landing() {
  return (

    <div>
      <Typography variant="h1">Rally</Typography>
      <Button variant="contained" color="primary"> Log In</Button>
      <Button variant="contained" color="primary">SignUp</Button>
    </div>

  );
}

export default Landing;