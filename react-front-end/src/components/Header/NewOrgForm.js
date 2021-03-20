import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom"
import FormGroup from '@material-ui/core/FormGroup';
import { TextField, Button, Typography } from '@material-ui/core';
import Axios from 'axios';
import UserContext from "../../contexts/UserContext";




const NewOrgForm = ({ data }) => {
  const history = useHistory();
  const { userState } = useContext(UserContext);
  const [newOrg, setNewOrg] = useState({
    name: '',
    description: '',
    primary_email: '',
    primary_phone: '',
    location: '',
    image_url: '',
    website: '',
    application_config: {},
    errors: {}

  })
 

  const updateDetails = (value, property) => {
    setNewOrg(prev => {
      return { ...prev, [property]: value}
    })
  }

  const sendData = () => {
    console.log('data sent')
    const taskData = {
      name:newOrg.name,
      description: newOrg.description,
      website: newOrg.website,
      primary_email: newOrg.primary_email,
      primary_phone: newOrg.primary_phone,
      image_url: newOrg.image_url,
      location: newOrg.location,
      application_config: {},
      userID: userState.id
    }
    Axios.put("/api/organizations", taskData)
    .then(res =>  {
      console.log(res);
      history.push(`/organizations/${res.data.organization_id}`)
    })
    .catch(err => console.error(err));
  }
  
  const setErrorStatus = (errorArray, key) => {
    errorArray.push(true);
    setNewOrg(prev => { return { ...prev, errors: {...prev.errors, [key]:true }}});
  }

  //Checks all the inputs on the create task for an passes the needed error props to each input
  const setErrors = () => {
    const errorArray = [];
    setNewOrg(prev => { return { ...prev, errors: {}} });
    
    if (!newOrg.name) {
      setErrorStatus(errorArray, 'name');
    }

    if (!newOrg.description) {
      setErrorStatus(errorArray, 'description')
    }

    if (!newOrg.location) {
      setErrorStatus(errorArray, 'location')
    }

    if (!newOrg.primary_email) {
      setErrorStatus(errorArray, 'primary_email')
    }

    if (!newOrg.primary_phone) {
      setErrorStatus(errorArray, 'primary_phone')
    }

    if (!newOrg.website) {
      setErrorStatus(errorArray, 'website')
    }

    if (!newOrg.image_url) {
      setErrorStatus(errorArray, 'image_url')
    }

    return errorArray;

  };

  const validate = () => {
    if(!setErrors()[0]) {
      sendData();
    }
  }

  return (
    <FormGroup>
      <TextField 
        id="task name"
        label="Organization Name" 
        value={newOrg.name} 
        onChange={event => updateDetails(event.target.value, 'name')}
        margin="normal"
        error={newOrg.errors.name ? true : false }
        helperText={newOrg.errors.name ? "Name can't be blank" : ''}
      />
       <TextField 
        id="description"
        label="Description"
        multiline
        value={newOrg.description} 
        onChange={event => updateDetails(event.target.value, 'description')}
        margin="normal"
        error={newOrg.errors.description ? true : false }
        helperText={newOrg.errors.description ? "Description can't be blank" : ''}
      />
      <TextField 
        id="location"
        label="Location"
        value={newOrg.location}
        onChange={event => {
          updateDetails(event.target.value, 'location')
        }}
        margin="normal"
        error={newOrg.errors.location ? true : false }
        helperText={newOrg.errors.location ? "Location can't be blank" : ''}
      />
      <TextField 
        id="primary_phone"
        label="Primary Phone"
        value={newOrg.primary_phone}
        onChange={event => {
          updateDetails(event.target.value, 'primary_phone')
        }}
        margin="normal"
        error={newOrg.errors.primary_phone ? true : false }
        helperText={newOrg.errors.primary_phone ? "Phone can't be blank" : ''}
      />
       <TextField 
        id="primary_email"
        label="Primary Email"
        value={newOrg.primary_email}
        onChange={event => {
          updateDetails(event.target.value, 'primary_email')
        }}
        margin="normal"
        error={newOrg.errors.primary_email ? true : false }
        helperText={newOrg.errors.primary_email ? "Email can't be blank" : ''}
      />
       <TextField 
        id="website"
        label="Website"
        value={newOrg.website}
        onChange={event => {
          updateDetails(event.target.value, 'website')
        }}
        margin="normal"
        error={newOrg.errors.website ? true : false }
        helperText={newOrg.errors.website ? "Website can't be blank" : ''}
      />
      <TextField 
        id="image_url"
        label="Organization Image URL"
        value={newOrg.image_url}
        onChange={event => {
          updateDetails(event.target.value, 'image_url')
        }}
        margin="normal"
        error={newOrg.errors.image_url ? true : false }
        helperText={newOrg.errors.image_url ? "Image URL can't be blank" : ''}
      />
      <Button type="submit" variant="contained" color="primary" onClick={validate}>
        Create Organization
      </Button>


    </FormGroup>
  );
}

export default NewOrgForm;