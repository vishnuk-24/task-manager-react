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
          <span>{task.title} </span>
          <button
            className="bg-red-500 text-white font-bold px-2 py-1 rounded mt-4 ml-auto hover:bg-red-600 transition"
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
