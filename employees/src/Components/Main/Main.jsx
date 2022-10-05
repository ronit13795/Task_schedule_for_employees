import React from "react";
import context from "../../context";
import { useContext } from "react";
import Task from "../Task/Task";

export default function Main() {
  const { name, setShowMenu, tasks, tasksToShow, setTasks } =
    useContext(context);

  return (
    <div>
      <p> welcome: {name}</p>
      {tasksToShow.map((task, index) => {
        return (
          <Task
            index={index}
            key={index}
            responsibility={task.employee}
            name={task.name}
          />
        );
      })}
    </div>
  );
}
