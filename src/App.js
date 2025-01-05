import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarUser from './components/NavBarUser';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarGuest from './components/NavBarGuest';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import useAuth from './hooks/useAuth'; // Import the hook

function App() {
  const { role, loading } = useAuth(); // Use the hook

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

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

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
