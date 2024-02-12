import { AddTask, TaskList } from "./components";

import "./App.css";

function App() {

  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
          <AddTask />
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
