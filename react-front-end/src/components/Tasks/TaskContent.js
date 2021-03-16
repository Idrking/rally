import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent({ tasks }) {
  console.log(tasks);
  return (
    <div>
      {tasks.map(task => {
        return (
          <div>
            <TaskCard task={task}/>
            <br />
          </div>
        );
      })}
    </div>
  );
}
