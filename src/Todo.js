import Task from "./Task";
import { useState } from "react";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]);
  return (
    <div className="todo">
      <div className="tasks">
        <Task task={task} setTask={setTask} />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const taskTemp = [...task];
          taskTemp.push({ title: newTask, status: true });
          setTask(taskTemp);
          setNewTask("");
        }}
      >
        <input
          type="text"
          name="add"
          placeholder="new task"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Todo;
