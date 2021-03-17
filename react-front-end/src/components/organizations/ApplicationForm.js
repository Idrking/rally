import React, {useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom"
import UserContext from "../../contexts/UserContext";
import FormGroup from '@material-ui/core/FormGroup';
import { TextField, Button, Typography } from '@material-ui/core';
import Axios from 'axios';



const ApplicationForm = ({ data }) => {
  const questions = data.application_config;
  const { userState } = useContext(UserContext);
  const [formDetails, setFormDetails] = useState({name: '', phone: '', email: '', submitted: false, errors:{}});
  const { id } = useParams();
  
  //Adds all the questions from an organizations config as keys to state
  useEffect(() => {
    setFormDetails(prev => {
      const qObject = {}
      Object.keys(questions).forEach(key => qObject[key] = '');
      return {...prev, ...qObject}
    })
  },[])

  const updateDetails = (value, property) => {
    setFormDetails(prev => {
      return { ...prev, [property]: value}
    })
  }

  //Generates a text input for each question in an organizations config file
  const generateInputs = (questions) => {
    const inputArray = [];
    for (const question in questions) {
      inputArray.push(
          <TextField
          key={`${question}`}
          id={`${question}`}
          label={`${questions[question]}`}
          value={formDetails[question]}
          multiline
          InputLabelProps={{shrink: true}}
          onChange={event => updateDetails(event.target.value, question)}
          margin="normal"
        />
      )
    }
    return inputArray;
  }

  const sendData = () => {
    const formData = {};
    for (const key in formDetails) {
      if (key !== 'errors' && key !== 'submitted') {
        formData[key] = {question: key, answer: formDetails[key]}
      }
    };

    Axios.put(`/api/approveduser/${id}/${userState.id}`, {application: JSON.stringify(formData)})
    .catch(err => console.error(err));
  }

  const setErrorStatus = (errorArray, key) => {
    errorArray.push(true);
    setFormDetails(prev => { return { ...prev, errors: {...prev.errors, [key]:true }}});
  };

  const setErrors = () => {
    const errorArray = [];
    setFormDetails(prev => { return { ...prev, errors: {}} });

    if (!formDetails.name) {
      setErrorStatus(errorArray, 'name');
    }

    if (!formDetails.phone) {
      setErrorStatus(errorArray, 'phone');
    }
    
    if (!formDetails.email) {
      setErrorStatus(errorArray, 'email');
    }

    return errorArray;
  };

  const validate = () => {
    if (!setErrors()[0]) {
      sendData();
    }
  }

  const inputs = generateInputs(questions)
  return (
    <FormGroup>
      {!userState.id && <Typography component="h2" color="error">You need to be logged in to submit an application</Typography> }
      <TextField 
        id="name"
        label="Name" 
        value={formDetails.name}
        onChange={event => updateDetails(event.target.value, 'name')}
        margin="normal"
        error={formDetails.errors.name ? true : false }
        helperText={formDetails.errors.name ? "Name can't be blank" : ''}
      />
        <TextField 
        id="phone"
        label="Phone Number" 
        value={formDetails.phone}
        onChange={event => updateDetails(event.target.value, 'phone')}
        margin="normal"
        error={formDetails.errors.phone ? true : false }
        helperText={formDetails.errors.phone ? "Phone can't be blank" : ''}
      />
        <TextField 
        id="email"
        label="Email" 
        value={formDetails.email}
        onChange={event => updateDetails(event.target.value, 'email')}
        margin="normal"
        error={formDetails.errors.email ? true : false }
        helperText={formDetails.errors.email ? "Email can't be blank" : ''}
      />
      {inputs}
  
      <Button type="submit" variant="contained" color="primary" onClick={validate}>
        Submit Application
      </Button>


    </FormGroup>
  );
}

export default ApplicationForm;

// error={'lemon' ? true : false }
// helperText={'lemon' ? "Name can't be blank" : ''}