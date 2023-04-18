import React from 'react';

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <React.Fragment>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default AddTaskForm;
