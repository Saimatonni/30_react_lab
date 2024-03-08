import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskItem from '../components/TaskItem';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newTaskHeader, setNewTaskHeader] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const handleShow = () => setShowModal(true);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { header: newTaskHeader, task: newTask }]);
      setNewTask('');
      setNewTaskHeader('');
      setShowModal(false);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setNewTaskHeader(tasks[index].header);
    setNewTask(tasks[index].task);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = { header: newTaskHeader, task: newTask };
    setTasks(updatedTasks);
    handleClose();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Task Manager</h1>
      <Button variant="primary" onClick={handleShow}>Add New Task</Button>

      <TaskForm
        showModal={showModal}
        handleClose={handleClose}
        handleAddTask={handleAddTask}
        handleSaveEdit={handleSaveEdit}
        editIndex={editIndex}
        newTaskHeader={newTaskHeader}
        setNewTaskHeader={setNewTaskHeader}
        newTask={newTask}
        setNewTask={setNewTask}
      />

      <TaskList
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskManager;




