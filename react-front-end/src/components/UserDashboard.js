import React from "react";
import Tasks from "./Tasks"
import { Typography, Button } from "@material-ui/core";

export default function Organizations() {

  return (
    <div>
    <br></br>
    <Typography variant="h4" component="h2">Available tasks</Typography>
    <Tasks></Tasks>
    <br></br>
    <Button type="submit"
            variant="contained"
            color="primary">Find Organizations</Button>
    </div>
  );
}
