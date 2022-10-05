import React from "react";
import "./Menu.css";
import context from "../../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const nav = useNavigate();
  const { setName, name, setShowMenu, tasks, tasksToShow, setTasks } =
    useContext(context);

  const allTasks = () => {
    setTasks(tasks);
  };

  const myTasks = () => {
    const myTask = tasks.filter((task) => {
      return task.employee === name;
    });
    setTasks(myTask);
  };

  const exit = () => {
    setShowMenu(false);
    setName("");
    nav("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
      }}
    >
      <button onClick={allTasks}>כל המשימות</button>
      <button onClick={myTasks}>המשימות שלי </button>
      <button> משימה חדשה</button>
      <button>היסטוריה </button>
      <button onClick={exit}>יציאה </button>
    </div>
  );
}
