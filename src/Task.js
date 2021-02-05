import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, setTask }) => {
  return task.map((el, index) => {
    return (
      <div className="task" key={index}>
        <div>
          <input
            type="checkbox"
            onClick={() => {
              if (el.status) {
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
