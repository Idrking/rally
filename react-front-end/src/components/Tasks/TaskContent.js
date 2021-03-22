import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent({ tasks, orgView, signups }) {
  console.log('signups', signups)
  return (
    <div>
      {tasks.map(task => {
        let signupCount = 0;
        if (signups) {
          signupCount = signups.find(count => count.id === task.id);
        }
        console.log(signupCount);
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
