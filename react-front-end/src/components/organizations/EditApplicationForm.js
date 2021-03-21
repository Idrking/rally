import React, {useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom"
import UserContext from "../../contexts/UserContext";
import FormGroup from '@material-ui/core/FormGroup';
import { TextField, Button, Typography, IconButton, InputAdornment } from '@material-ui/core';
import Axios from 'axios';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



const EditApplicationForm = ({ data }) => {
  const questions = data;
  const { userState } = useContext(UserContext);
  const [formDetails, setFormDetails] = useState({ submitted: false, errors:{}});
  const { id } = useParams();
  
  //Adds all the questions from an organizations config as keys to state
  useEffect(() => {
    setFormDetails(prev => {
      const qObject = {}
      Object.keys(questions).forEach(key => qObject[key] = questions[key]);
      return {...prev, submitted: false, ...qObject}
    })
  },[id])

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
          value={formDetails[question]}
          multiline
          InputLabelProps={{shrink: true}}
          onChange={event => updateDetails(event.target.value, question)}
          margin="normal"
          InputProps={{
            endAdornment: <InputAdornment color="secondary" position="end">
              <IconButton color="secondary">
                <DeleteForeverIcon color="secondary" />
              </IconButton>
            </InputAdornment>
          }}
        />
      )
    }
    return inputArray;
  }

  // const sendData = () => {
  //   const formData = {};
  //   for (const key in formDetails) {
  //     if (key !== 'errors' && key !== 'submitted') {
  //       formData[key] = {question: questions[key] || key, answer: formDetails[key]}
  //     }
  //   };
  //   console.log(formData)
  //   Axios.put(`/api/approveduser/${id}/${userState.id}`, {application: formData })
  //   .then(() => setFormDetails(prev => { return {...prev, submitted: true}}))
  //   .catch(err => console.error(err));
  // }

  // const setErrorStatus = (errorArray, key) => {
  //   errorArray.push(true);
  //   setFormDetails(prev => { return { ...prev, errors: {...prev.errors, [key]:true }}});
  // };

  // const setErrors = () => {
  //   const errorArray = [];
  //   setFormDetails(prev => { return { ...prev, errors: {}} });

  //   if (!formDetails.name) {
  //     setErrorStatus(errorArray, 'name');
  //   }

  //   if (!formDetails.phone) {
  //     setErrorStatus(errorArray, 'phone');
  //   }
    
  //   if (!formDetails.email) {
  //     setErrorStatus(errorArray, 'email');
  //   }

  //   return errorArray;
  // };

  // const validate = () => {
  //   if (!setErrors()[0]) {
  //     sendData();
  //   }
  // }
  const inputs = generateInputs(questions)
  const body = (
    <FormGroup>
      {inputs}

      <Button style={{marginBottom:'20px', marginTop:'20px'}} startIcon={<AddCircleIcon />} variant="contained" color="primary" onClick={() =>console.log('addy')}>
        Add a new question
      </Button>
  
      <Button type="submit" variant="contained" color="primary" onClick={() => console.log('clicky')}>
        Save changes
      </Button>


    </FormGroup>
  );

  return (
    <>
    {!userState.id && <Typography component="h2" color="error">You need to be logged in to submit an application</Typography> }
    {(userState.id && !formDetails.submitted) && body}
    {formDetails.submitted && (
      <Typography component="h2" color="primary">
        Thank you for your application!
        The organization will be in contact shortly.
      </Typography>
    )}
    </>
  );
}

export default EditApplicationForm;
