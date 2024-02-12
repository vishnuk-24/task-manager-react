import { useState, useEffect } from "react";
import axios from "axios";

import Task from "./Task";


function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Read all the tasks
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/tasks").then((response) => {
      setTasks(response.data);
    });
  });

  return (
    <>
      <div>TaskList</div>
      <div>
        <ul className="mt-6 space-y-2">
          {tasks.map((task) => (
            <li key={task.title} className="flex items-center justify-between bg-gray-200 p-3 rounded">
              <Task task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
