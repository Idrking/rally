import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContent() {
  return (
    <div>
      <div>
        {" "}
        <TaskCard />
      </div>
      <br/>
      <div>
        {" "}
        <TaskCard />
      </div>
    </div>
  );
}
