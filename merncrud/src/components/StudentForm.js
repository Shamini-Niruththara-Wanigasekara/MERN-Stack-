import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function StudentForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Submit form data to backend
    // You'll need to implement this part
  };

  return (
    <Container>
      <h2>Add Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" value={image} onChange={e => setImage(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={age} onChange={e => setAge(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Student</Button>
      </Form>
    </Container>
  );
}

export default StudentForm;
