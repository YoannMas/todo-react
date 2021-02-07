import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, setTask }) => {
  // Run throught all the tasks
  return task.map((el, index) => {
    return (
      <div className="task" key={index}>
        <div>
          <input
            type="checkbox"
            checked={el.checked}
            // When checkbox is changed, change status to true or false
            onChange={() => {
              if (!el.checked) {
                const taskTemp = [...task];
                let taskTemp2 = [...task];
                // Turn check to true
                taskTemp[index].checked = true;
                // If task is checked, put it bellow unchecked task
                taskTemp2 = taskTemp.splice(index, 1);
                taskTemp.push(...taskTemp2);
                setTask(taskTemp);
              } else {
                const taskTemp = [...task];
                let taskTemp2 = [...task];
                taskTemp[index].checked = false;
                // If task is unchecked, put it above all tasks
                taskTemp2 = taskTemp.splice(index, 1);
                taskTemp.unshift(...taskTemp2);
                setTask(taskTemp);
              }
            }}
          />
          {/* Toggle for striking the target task (if status is true or false) */}
          {!el.checked ? (
            <span>{el.title}</span>
          ) : (
            <span>
              <s>{el.title}</s>
            </span>
          )}
        </div>
        <FontAwesomeIcon
          className="icon"
          icon="trash"
          // remove the task
          onClick={() => {
            const taskTemp = [...task];
            taskTemp.splice(index, 1);
            setTask(taskTemp);
          }}
        />
      </div>
    );
  });
};

export default Task;
