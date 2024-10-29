// src/components/ProtectedComponent.js
import React, { useEffect, useState } from 'react';

function ProtectedComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` // Envía el token en el encabezado de autorización
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Datos Protegidos</h1>
          <p>{JSON.stringify(data)}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ProtectedComponent;
