import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TodoForm = ({ show, handleClose, addTodo, editTodo, todoToEdit }) => {
  const [todo, setTodo] = useState({ text: '' });

  useEffect(() => {
    if (todoToEdit) {
      setTodo(todoToEdit);
    }
  }, [todoToEdit]);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    todoToEdit ? editTodo(todo) : addTodo(todo);
    setTodo({ text: '' });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{todoToEdit ? 'Edit Todo' : 'Add Todo'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="todoText">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              name="text"
              value={todo.text}
              onChange={handleChange}
              placeholder="Enter todo text"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {todoToEdit ? 'Update Todo' : 'Add Todo'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoForm;
