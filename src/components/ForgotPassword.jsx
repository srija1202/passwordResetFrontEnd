/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://passwordreset-kpey.onrender.com/auth/forgot-password', { email });
      toast.success('Reset link sent to your email!');
    } catch (error) {
      toast.error('Error sending reset link');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <ToastContainer /> 
      <Card className="p-4" style={{ width: '400px' }}>
        <h2 className="text-center">Forgot Password</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send Reset Link
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
