import { useState, useEffect } from "react";
import { AddTask, TaskList } from "./components";
import axios from "axios";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Read all the tasks
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/tasks").then((response) => {
      setTasks(response.data);
    });
  });

  return (
    <>
      <div className="mt-0 font-serif text-center bg-gray-200 py-10 px-5">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <h1 className="bg-blue">Task Manager</h1>
          <AddTask />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
