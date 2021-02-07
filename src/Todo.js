import Task from "./Task";
import { useState } from "react";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]);
  return (
    <div className="todo">
      <div className="tasks">
        {/* Render tasks */}
        <Task task={task} setTask={setTask} />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const taskTemp = [...task];
          // Add to task an object width the new task and a status (true: task not done, false task: done, checked: false)
          // When form is submitted
          taskTemp.push({ title: newTask, status: true, checked: false });
          setTask(taskTemp);
          // Clean the input
          setNewTask("");
        }}
      >
        <input
          type="text"
          name="add"
          placeholder="new task"
          value={newTask}
          onChange={(event) => {
            // Add the input value to newTask
            setNewTask(event.target.value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Todo;
