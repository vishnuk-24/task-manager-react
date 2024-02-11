import axios from "axios";

function Task({ task }) {
  const deleteHandler = (title) => {
    axios
      .delete(`http://localhost:8000/api/v1/task/${title}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <p>
          <span>{task.title} : </span> {task.description}
          <button
            className="bg-red-500 text-white"
            onClick={() => deleteHandler(task.title)}
          >
            Delete
          </button>
        </p>
      </div>
    </>
  );
}

export default Task;
