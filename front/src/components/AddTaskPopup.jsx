import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';


const AddTaskPopup = ({ show, handleClose }) => {
  const [taskInfo, setTaskInfo] = useState({
    status: false,
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInfo({ ...taskInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting the task data, e.g., send it to the backend
    // Then, close the popup
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="status">
            <Form.Check
              type="checkbox"
              label="Status"
              name="status"
              checked={taskInfo.status}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              name="content"
              value={taskInfo.content}
              onChange={handleChange}
              placeholder="Task Content"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

// Prop types validation
AddTaskPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AddTaskPopup;
