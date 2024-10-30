import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBarUser from './components/NavBarUser';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarGuest from './components/NavBarGuest';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [role, setRole] = useState(null);

  // Verifica el token y el rol del usuario al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Ej: 'admin', 'user'

    if (token && userRole) {
      setRole(userRole);
    } else {
      setRole('guest'); // Usuario no autenticado
    }
  }, []);

  // Elige la barra de navegación basada en el rol
  const getNavBar = () => {
    switch (role) {
      case 'admin':
        return <NavBarAdmin />;
      case 'user':
        return <NavBarUser />;
      default:
        return <NavBarGuest />;
    }
  };

  return (
    <Router>
      <div className="App">
        {getNavBar()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
