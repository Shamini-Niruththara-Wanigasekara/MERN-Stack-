import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';

function StudentItem({ student }) {
  const {  name, image, age, status } = student;

  return (
    <ListGroupItem>
      <div>
        <img src={image} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <h5>{name}</h5>
        <p>Age: {age}</p>
        <p>Status: {status}</p>
      </div>
      <Button variant="primary">Edit</Button>{' '}
      <Button variant="danger">Delete</Button>
    </ListGroupItem>
  );
}

export default StudentItem;
