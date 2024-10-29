// src/pages/Register.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Col, Row } from 'react-bootstrap';

const Register = () => {
  return (
    <Row>
      <Col></Col>
      <Col md>
        <RegisterForm />
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Register;
