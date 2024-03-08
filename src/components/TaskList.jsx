import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleEditTask, handleDeleteTask }) => {
  return (
    <div className="mt-4">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;