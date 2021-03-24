import { Container, Typography, Avatar, Button, Divider } from '@material-ui/core';
import Axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import VolunteerContext from "../../contexts/VolunteerContext";
import { useParams } from 'react-router-dom';
import applicationStyles from "../../styles/applicationStyles";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const VolunteerApplication = ({ data, modalClose }) => {
  const buttonClasses = applicationStyles();
  const { setPendingVolunteers } = useContext(VolunteerContext);
  const { id } = useParams();
  const [application, setApplication] = useState({userID: null, organizationID: null, confirm: false, answers: {}});

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
          <Typography variant="h4" color="primary" gutterBottom>{answers[key].question.toUpperCase()}</Typography>
          <Typography variant="body2" component="p" paragraph gutterBottom>{answers[key].answer}</Typography>
          <Divider/>
          <br/>
        </div>
      );
      layoutItems.push(slide);
    }
    return layoutItems;
  }

  const send = (status) => {
    Axios.patch(`/api/approveduser/${id}/${data.id}`, {set: status})
    .then(() => {
      modalClose();
      setPendingVolunteers(prev => {
        return prev.filter(volunteer => volunteer.id === data.id ? false : true)
      })
    })
    .catch(err => console.error(err));
  };

  
  const confirm = () => {
    setApplication(prev => { return {...prev, confirm: !prev.confirm}});
  };
  const answers = generateAnswers();

  return (<Container className={buttonClasses.container}>
    <Avatar
      className={buttonClasses.avatar}
      src={data.profile_image_url}
    />
    {answers}
    {!application.confirm && <div className={buttonClasses.buttonContainer}>
      <Button color="secondary" className={buttonClasses.accept} size="large" startIcon={<CheckCircleIcon />} onClick={() => send('true')}>
        Accept
      </Button>
      <Button className={buttonClasses.reject} size="large" startIcon={<CancelIcon />} onClick={confirm}>
        Reject
      </Button>
    </div>}
    {application.confirm && <Typography variant="h5" color="error">Are you sure you want to reject this applicant?</Typography>}
    {application.confirm && 
      <div className={buttonClasses.buttonContainer}>
        <Button className={buttonClasses.reject} size="large" startIcon={<CheckCircleIcon />} onClick={() => send('false')}>
          Confirm
        </Button>
        <Button className={buttonClasses.reject} size="large" startIcon={<CancelIcon />} onClick={confirm}>
          Cancel
        </Button>
      </div>
    }
    

  </Container>);
};

export default VolunteerApplication;