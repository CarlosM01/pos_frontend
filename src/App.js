// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
