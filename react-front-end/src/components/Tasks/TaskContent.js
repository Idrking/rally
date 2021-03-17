import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent({ tasks }) {
  return (
    <div>
      {tasks.map(task => {
        return (
          <div key={task.id}>
            <TaskCard key={task.id}   task={task}/>
            <br />
          </div>
        );
      })}
    </div>
  );
}
