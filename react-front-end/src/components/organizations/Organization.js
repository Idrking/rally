import { Container } from '@material-ui/core';
import React from 'react';
import SimpleBottomNavigation from "../OrganizationNav";

export default function Organization() {



  return (
  <Container>
    <Container maxWidth="sm">
      Dogs
    </Container>
    <Container maxWidth="sm">
      Cats  
    </Container>    
    
    <SimpleBottomNavigation />
  </Container>
  );
};