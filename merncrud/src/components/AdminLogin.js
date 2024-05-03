import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { login } from '../api'; // Import the login function from API file

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login function from API file
      const userData = { username, password };
      const response = await login(userData);
      // Handle successful login, e.g., redirect to dashboard
      console.log('Login successful:', response);
    } catch (error) {
      // Handle login error, e.g., display error message
      console.error('Login failed:', error);
    }
  };

  return (
    <Container>
      <h2>Admin Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default AdminLogin;

