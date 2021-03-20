import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, IconButton, Backdrop, Fade } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0
  }
}))


export default function AddOrgModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <props.FormComponent data={props.data} />
    </div>
  );

  return (
    <div>
      <IconButton type="button" variant="contained" color="primary" onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-modal"
        aria-describedby="form"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {body}
        </Fade>
      </Modal>
    </div>
  );
}