import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Estado para controlar la visibilidad del menú desplegable
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú desplegable
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Servicios</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
      <section className="content">
        <h1>Bienvenido</h1>
        <p>Este es un sitio web dinámico e innovador.</p>
      </section>
    </div>
  );
};

export default App;
