/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="text-center mb-4">
        <Col>
          <h2 className="display-4">Welcome to Your Dashboard</h2>
          <p className="lead">Manage your activities and settings here</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
