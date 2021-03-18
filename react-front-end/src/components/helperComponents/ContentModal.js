import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

// Component renders a button with the text=children of the component
// Accepts ContentComponent(component that renders a form), and ButtonComponent (component that renders the button) as props
// Along with data, which is passed as props to ContentComponent
export default function ContentModal(props) {
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
        <props.FormComponent data={props.data} modalClose={handleClose}/>
      </div>
    );

  return (
    <div>
      {props.buttonFunc(handleOpen)}
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