import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rejected, setRejected] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const data = {
        username: username,
        password: password
      };

      fetch('http://localhost:8080/auth/register', {
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
        setRejected(false); // Ocultar alerta de error en caso de éxito
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      setRejected(true);  // Mostrar alerta cuando las contraseñas no coinciden
      setSuccessful(false); // Ocultar alerta de éxito en caso de error
    }
  };

  return (
    <Container>
      {rejected && (
        <Alert variant="danger" onClose={() => setRejected(false)} dismissible>
          Las contraseñas no coinciden. Por favor, inténtalo de nuevo.
        </Alert>
      )}
      {successful && (
        <Alert variant="success" onClose={() => setSuccessful(false)} dismissible>
          Usuario registrado con éxito.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterForm;
