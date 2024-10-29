// src/pages/Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Col, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <Row>
      <Col></Col>
      <Col md>
        <LoginForm />
      </Col>
      <Col></Col>
  </Row>
  );
};

export default Login;
