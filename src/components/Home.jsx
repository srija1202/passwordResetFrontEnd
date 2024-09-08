/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center">
          <h1>Welcome to the Password Reset App</h1>
          <p>Manage your password securely with ease.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
