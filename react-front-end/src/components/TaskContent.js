import { Grid } from "@material-ui/core";
import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent() {
  return (
    <div>
      <div>
        {" "}
        <TaskCard />
      </div>
      <div>
        {" "}
        <TaskCard />
      </div>
    </div>
  );
}
