import { useState, useEffect } from 'react';

const useAuth = () => {
  const [data, setData] = useState(null);
  const [role, setRole] = useState('guest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    fetch('http://localhost:8080/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setRole(data.role || 'guest');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    window.location.reload();
  };

  return { data, role, loading, logout }; // Devuelve logout
};

export default useAuth;
