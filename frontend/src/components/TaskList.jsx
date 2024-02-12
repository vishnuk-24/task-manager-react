import Task from "./Task";

function TaskList({ tasks }) {
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
