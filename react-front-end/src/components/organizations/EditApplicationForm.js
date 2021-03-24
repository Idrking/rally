import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import FormGroup from "@material-ui/core/FormGroup";
import {
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import Axios from "axios";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const EditApplicationForm = ({ data, setConfigUpdated, setOpen }) => {
  const questions = data;
  const { userState } = useContext(UserContext);
  const [formDetails, setFormDetails] = useState({
    submitted: false,
    errors: {},
    questions: {},
  });
  const { id } = useParams();

  //Adds all the questions from an organizations config as keys to state
  useEffect(() => {
    setFormDetails((prev) => {
      const qObject = {};
      Object.keys(questions).forEach((key) => (qObject[key] = questions[key]));
      return { ...prev, submitted: false, questions: { ...qObject } };
    });
  }, [id]);

  const updateDetails = (value, property) => {
    setFormDetails((prev) => {
      return { ...prev, questions: { ...prev.questions, [property]: value } };
    });
  };

  //Generates a text input for each question in an organizations config file
  const generateInputs = (questions) => {
    const inputArray = [];
    for (const question in questions) {
      inputArray.push(
        <TextField
          key={`${question}`}
          id={`${question}`}
          value={formDetails.questions[question]}
          multiline
          onChange={(event) => updateDetails(event.target.value, question)}
          margin="normal"
          InputLabelProps={{
            style: {
              fontSize: "18px",
              color: '#CFCFCF'
            },
          }}
          InputProps={{
            style: {
              fontSize: "18px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => removeInput(question)}>
                  <DeleteForeverIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      );
    }
    return inputArray;
  };

  const addBlankInput = () => {
    const nextNumber = Object.keys(formDetails.questions).length + 1;
    const newKey = `question${nextNumber}`;
    setFormDetails((prev) => {
      return { ...prev, questions: { ...prev.questions, [newKey]: "" } };
    });
  };

  const removeInput = (question) => {
    setFormDetails((prev) => {
      const newDetails = { ...prev, questions: { ...prev.questions } };
      delete newDetails.questions[question];
      let numberOfQuestions = 1;
      const orderedQuestions = {};
      for (const question in newDetails.questions) {
        const newKeyName = `question${numberOfQuestions}`;
        orderedQuestions[newKeyName] = newDetails.questions[question];
        numberOfQuestions++;
      }
      console.log(orderedQuestions);
      return { ...prev, questions: { ...orderedQuestions } };
    });
  };

  const sendData = () => {
    const formData = {};
    for (const key in formDetails.questions) {
      formData[key] = formDetails.questions[key];
    }

    Axios.patch(`/api/organizations/${id}/application`, { newConfig: formData })
      .then(() => {
        setConfigUpdated((prev) => !prev);
        setTimeout(() => {
          setOpen(false);
        }, 2500);
        setFormDetails((prev) => {
          return { ...prev, submitted: true };
        });
      })
      .catch((err) => console.error(err));
  };

  const inputs = generateInputs(formDetails.questions);
  const body = (
    <FormGroup>
      {inputs}

      <Button
        style={{ marginBottom: "20px", marginTop: "20px", boxShadow: "none" }}
        startIcon={<AddCircleIcon />}
        variant="contained"
        color="primary"
        onClick={addBlankInput}
      >
        Add a new question
      </Button>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={sendData}
        style={{ boxShadow: "none" }}
      >
        Save changes
      </Button>
    </FormGroup>
  );

  return (
    <>
      {!userState.id && (
        <Typography component="h2" color="error">
          You need to be logged in to submit an application
        </Typography>
      )}
      {userState.id && !formDetails.submitted && body}
      {formDetails.submitted && (
        <Typography component="h2" color="primary">
          Changes saved successfully!
        </Typography>
      )}
    </>
  );
};

export default EditApplicationForm;
