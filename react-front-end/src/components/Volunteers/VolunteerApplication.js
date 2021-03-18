import { Container, Typography, Avatar, Button } from '@material-ui/core';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import volunteerCardStyles from "../../styles/volunteerCardStyles";
import applicationButtonStyles from "../../styles/applicationButtonStyles";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const VolunteerApplication = ({ data }) => {
  const classes = volunteerCardStyles();
  const buttonClasses = applicationButtonStyles();
  const { id } = useParams();
  const [application, setApplication] = useState({userID: null, organizationID: null, answers: {}});

  useEffect(() => {
    Axios.get(`/api/approveduser/${id}/${data.id}/application`)
    .then(res => {
      setApplication(() => {
        return {
          userID: res.data[0].user_id,
          organizationID: res.data[0].organizationID,
          answers: res.data[0].application
        }
      })
    })
    .catch(err => console.error(err));
  }, [])

  const generateAnswers = () => {
    const answers = application.answers;
    const layoutItems = [];
    for (const key in answers) {
      const slide = (
        <div key={key}> 
          <Typography variant="h6" component="h6" color="primary">{answers[key].question.toUpperCase()}</Typography>
          <Typography component="p" gutterBottom>{answers[key].answer}</Typography>
        </div>
      );
      layoutItems.push(slide);
    }
    return layoutItems;
  }

  const answers = generateAnswers();

  return (<Container>
    <Avatar
      className={classes.media}
      src={data.profile_image_url}
    />
    {answers}
    <Button className={buttonClasses.accept} size="large" startIcon={<CheckCircleIcon />}>
      Accept
    </Button>
    <Button className={buttonClasses.reject} size="large" startIcon={<CancelIcon />}>
      Reject
    </Button>
  </Container>);
};

export default VolunteerApplication;