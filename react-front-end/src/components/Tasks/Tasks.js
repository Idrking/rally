import React from "react";
import TaskContent from "./TaskContent";

export default function Tasks({ tasks }) {
  return (
    <div>
      <TaskContent tasks={tasks} />
    </div>
  );
}
