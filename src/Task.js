import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, setTask }) => {
  // Run throught all the tasks
  return task.map((el, index) => {
    return (
      <div className="task" key={index}>
        <div>
          <input
            type="checkbox"
            // When checkbox is clicked, change status to true or false
            onClick={(event) => {
              if (el.status) {
                console.log(event);
                const taskTemp = [...task];
                taskTemp[index].status = false;
                setTask(taskTemp);
              } else {
                const taskTemp = [...task];
                taskTemp[index].status = true;
                setTask(taskTemp);
              }
            }}
          />
          {/* Toggle for striking the target task (if status is true or false) */}
          {el.status ? (
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
