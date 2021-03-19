import React from "react";
import TaskContent from "./TaskContent";

export default function Tasks({ tasks, orgView }) {
  return (
    <div>
      { orgView ? <TaskContent orgView={orgView} tasks={tasks} /> : <TaskContent tasks={tasks} />}
    </div>
  );
}
