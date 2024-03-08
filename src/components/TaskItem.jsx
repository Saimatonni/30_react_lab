import React from 'react';
import { Button } from 'react-bootstrap';

const TaskItem = ({ task, index, handleEditTask, handleDeleteTask }) => {
  return (
    <div key={index} className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{task.header}</h5>
        <p>{task.task}</p>
        <div>
          <Button variant="primary" size="sm" onClick={() => handleEditTask(index)}>Edit</Button>
          <Button variant="danger" size="sm" onClick={() => handleDeleteTask(index)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;