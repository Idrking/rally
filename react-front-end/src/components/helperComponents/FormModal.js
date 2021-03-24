import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));

// Component renders a button with the text=children of the component
// Accepts data(array), FormComponent(component that renders a form), details(object with keys task and description) as props
export default function FormModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Container className={classes.paper}>
      <Typography variant="h3" color="primary" gutterBottom id="simple-modal-title">{props.details.task}</Typography>
      <Typography variant="body2" id="simple-modal-description">{props.details.description}</Typography>
      <props.FormComponent
        setOpen={setOpen}
        setConfigUpdated={props.stateChanger}
        data={props.data}
      />
      <br/>
    </Container>
  );

  return (
    <div>
      {props.ModalButton(handleOpen)}

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
        <Fade in={open}>{body}</Fade>
      </Modal>
    </div>
  );
}
