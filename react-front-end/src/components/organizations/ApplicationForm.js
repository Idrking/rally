import React, {useState, useContext, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom"
import UserContext from "../../contexts/UserContext";
import FormGroup from '@material-ui/core/FormGroup';
import { TextField, Button, Typography } from '@material-ui/core';
import Axios from 'axios';



const ApplicationForm = ({ data }) => {
  const questions = data.application_config;
  const { userState } = useContext(UserContext);
  const [formDetails, setFormDetails] = useState({name: '', phone: '', email: '', submitted: false, errors:{}});
  
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
    console.log("we sendah da data")
    // Axios.put("/api/tasks", taskData)
    // .then(res =>  history.push(`/tasks/${res.data[0].id}`))
    // .catch(err => console.error(err));
  }

  const setErrors = () => {
    const errorArray = [];
    setFormDetails(prev => { return { ...prev, errors: {}} });
    !formDetails.name && setFormDetails(prev => { errorArray.push(true); return {...prev, errors: {...prev.errors, name: true}}});
    !formDetails.phone && setFormDetails(prev => { errorArray.push(true); return {...prev, errors: {...prev.errors, phone: true}}});
    !formDetails.email && setFormDetails(prev => { errorArray.push(true); return {...prev, errors: {...prev.errors, email: true}}});
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
      />
        <TextField 
        id="email"
        label="Email" 
        value={formDetails.email}
        onChange={event => updateDetails(event.target.value, 'email')}
        margin="normal"
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