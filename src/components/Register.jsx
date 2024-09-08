/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Optional: show loading state

    try {
      await axios.post('https://passwordreset-kpey.onrender.com/auth/register', { email, password });
      toast.success('Registration successful!');
      setTimeout(() => navigate('/login'), 2000); // Navigate to login after success
    } catch (error) {
      toast.error('Registration failed');
    } finally {
      setLoading(false); // Remove loading state after process completes
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <ToastContainer />  
      <Card className="p-4" style={{ width: '400px' }}>
        <h2 className="text-center">Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
