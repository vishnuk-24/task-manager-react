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
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
          <AddTask />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
