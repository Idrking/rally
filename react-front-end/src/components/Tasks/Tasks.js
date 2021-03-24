import React from "react";
import TaskContent from "./TaskContent";

export default function Tasks(props) {
  return (
    <div>
      {props.orgView ? (
        <TaskContent
          orgView={props.orgView}
          tasks={props.tasks}
          signups={props.signups}
        />
      ) : (
        <TaskContent tasks={props.tasks} signups={props.signups} />
      )}
    </div>
  );
}
