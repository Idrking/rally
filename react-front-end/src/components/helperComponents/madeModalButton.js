import React from "react";
import { Button } from "@material-ui/core";

const makeModalButton = (label, icon, classes, onClick) => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      size="large"
      startIcon={icon}
      className={classes}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default makeModalButton;
