import React from "react";

const Task = props => {
  return (
    <div className="task">

      <div className="task-header">
        <div>
          <b>{props.task.title}</b>
        </div>
      </div>

        <hr />

      <div className="task-body">
        {props.task.description}
      </div>

    </div>
  );
};

export default Task;
