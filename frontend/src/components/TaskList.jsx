import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <>
      <div>TaskList</div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.title}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
