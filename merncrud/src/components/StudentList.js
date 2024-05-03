import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import StudentItem from './StudentItem';

function StudentList({ students }) {
  return (
    <Container>
      <h2>Student List</h2>
      <ListGroup>
        {students.map(student => (
          <StudentItem key={student._id} student={student} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default StudentList;
