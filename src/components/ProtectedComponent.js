import React from 'react';
import useAuth from '../hooks/useAuth';

function ProtectedComponent() {
  const { data, loading } = useAuth(); // Usa el hook

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h1>Datos Protegidos</h1>
          <p>{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
}

export default ProtectedComponent;
