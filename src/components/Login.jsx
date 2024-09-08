/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://passwordreset-kpey.onrender.com/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
      setTimeout(() => {
        navigate('/dashboard');
        window.location.reload();
      }, 2000); // Delay for better UX after success
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <ToastContainer /> {/* ToastContainer for notifications */}
      <Card className="p-4" style={{ width: '400px' }}>
        <h2 className="text-center">Login</h2>
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

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
