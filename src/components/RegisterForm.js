import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rejected, setRejected] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const data = {
        username: username,
        email: email,
        password: password
      };
      console.log(data)

      fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setSuccessful(true);
        setRejected(false); // Hide error alert on success
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      setRejected(true);  // Show alert when passwords do not match
      setSuccessful(false); // Hide success alert on error
    }
  };

  return (
    <Container>
      {rejected && (
        <Alert variant="danger" onClose={() => setRejected(false)} dismissible>
          Passwords do not match. Please try again.
        </Alert>
      )}
      {successful && (
        <Alert variant="success" onClose={() => setSuccessful(false)} dismissible>
          Successfully registered user.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterForm;
