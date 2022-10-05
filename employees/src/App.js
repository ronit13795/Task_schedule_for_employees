import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import context from "./context";
import Enter from "./Components/Enter/Enter";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";

function App() {
  const tasks = [
    {
      employee: "ronita",
      description: "add button for move to another page",
      name: "button",
    },
    {
      employee: "dan",
      description: "add img for move to another page",
      name: "img",
    },
    {
      employee: "david",
      description: "add input for move to another page",
      name: "input",
    },
  ];
  const [name, setName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [tasksToShow, setTasks] = useState(tasks);
  return (
    <div>
      <context.Provider
        value={{ setName, setShowMenu, tasks, tasksToShow, setTasks, name }}
      >
        <BrowserRouter>
          {showMenu && <Menu />}
          <Routes>
            <Route path="/" element={<Enter />}></Route>
            <Route path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
