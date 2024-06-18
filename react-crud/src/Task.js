import "./App.css";

export const Task = (props) => {
  return (
    <div className="show-task__item" key={props.task.id}>
      <h1 style={{color: props.task.completed?"Green":"Black"}}>{props.task.taskName}</h1>
      <button onClick={() => props.completeTask(props.task)}>Complete</button>
      <button onClick={() => props.deleteTask(props.task.id)}>X</button>
    </div>
  );
};
