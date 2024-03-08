import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const TaskForm = ({ showModal, handleClose, handleAddTask, handleSaveEdit, editIndex, newTaskHeader, setNewTaskHeader, newTask, setNewTask }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editIndex !== null ? "Edit Task" : "Add New Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="header">
          <Form.Label>Task Header</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task header"
            value={newTaskHeader}
            onChange={(e) => setNewTaskHeader(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="task">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task description"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        {editIndex !== null ? (
          <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
        ) : (
          <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default TaskForm;