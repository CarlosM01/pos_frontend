// src/App.js
import React from 'react';
import Formulario from './components/Formulario';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Mi Aplicación React</h1>
      <Formulario />
    </div>
  );
}

export default App;
