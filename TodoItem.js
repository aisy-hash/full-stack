import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TodoItem = ({ todo, deleteTodo, showEditForm }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <strong>Todo:</strong> {todo.text}
        </div>
        <div>
          <Button variant="outline-primary" onClick={() => showEditForm(todo)}>Edit</Button>{' '}
          <Button variant="outline-danger" onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
