import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent({ tasks, orgView, signups }) {
  return (
    <div>
      {tasks.map(task => {
        console.log('signups',signups);
        let signupCount = 0;
        if (signups) {
          signupCount = signups.find(count => count.id === task.id);
        }
        return (
          <div key={task.id}>
            <TaskCard signups={signupCount ? signupCount.count : 0} orgView={orgView} key={task.id} task={task}/>
            <br />
          </div>
        );
      })}
    </div>
  );
}
