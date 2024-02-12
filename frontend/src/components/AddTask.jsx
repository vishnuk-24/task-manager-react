import { useState } from "react";
import axios from "axios";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Post a todo
  const addTodoHandler = () => {
    if (title && description) {
      axios
        .post("http://localhost:8000/api/v1/task/", {
          title: title,
          description: description,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mb-4">
      <h5>Add your task</h5>
      <div className="p-8 ">
        <span>
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="mt-4 border rounded p-2"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={addTodoHandler}
          >
            Add Task
          </button>
        </span>
      </div>
    </div>
  );
}

export default AddTask;
