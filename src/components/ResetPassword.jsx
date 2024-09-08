/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://passwordreset-kpey.onrender.com/auth/reset-password', {
        token,
        newPassword,
        confirmPassword
      });
      toast.success('Password reset successfully!');
      setTimeout(() => navigate('/login'), 2000); // Navigate after 2 seconds
    } catch (error) {
      toast.error('Error resetting password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <ToastContainer />  
      <Card className="p-4" style={{ width: '400px' }}>
        <h2 className="text-center">Reset Password</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ResetPassword;
