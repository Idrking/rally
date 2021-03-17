import { Container, Typography, Avatar } from '@material-ui/core';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import volunteerCardStyles from "../../styles/volunteerCardStyles";


const VolunteerApplication = ({ data }) => {
  const classes = volunteerCardStyles();
  const { id } = useParams();
  const [application, setApplication] = useState({userID: null, organizationID: null, answers: {}});

  useEffect(() => {
    Axios.get(`/api/approveduser/${id}/${data.id}/application`)
    .then(res => {
      console.log(res.data)
      setApplication(prev => {
        return {
          userID: res.data[0].user_id,
          organizationID: res.data[0].organizationID,
          answers: JSON.parse(res.data[0].application)
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
  </Container>);
};

export default VolunteerApplication;