import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PeopleIcon from "@material-ui/icons/People";

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
  buttons: {
    color: "#fff",
    textAlign: "left",
    padding: 25,
    backgroundColor: "#B6C7C3",
    boxShadow: "none",
    boxSizing: "border-box",
    borderRadius: "14px",
    fontSize: 18,
    textTransform: "capitalize",
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
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{props.details.task}</h2>
      <p id="simple-modal-description">{props.details.description}</p>
      <props.FormComponent
        setOpen={setOpen}
        setConfigUpdated={props.stateChanger}
        data={props.data}
      />
    </div>
  );

  return (
    <div>
      <Button
        type="button"
        variant="contained"
        fullWidth
        color="secondary"
        size="large"
        onClick={handleOpen}
        className={classes.buttons}
      >
        {props.children}
      </Button>
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
