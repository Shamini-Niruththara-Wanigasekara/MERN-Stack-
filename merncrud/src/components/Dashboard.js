import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import axios from '../api';

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <h2>Dashboard</h2>
      <Button>Add Student</Button>
      <StudentList students={students} />
      <StudentForm />
    </Container>
  );
}

export default Dashboard;
