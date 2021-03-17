import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent({ tasks }) {
  return (
    <div>

      {tasks.map(task => {
        console.log('this is task id', task.id)
        console.log('this is task', task)
        return (
            <TaskCard key={task.id} task={task}/>
        );
      })}
    </div>
  );
}
