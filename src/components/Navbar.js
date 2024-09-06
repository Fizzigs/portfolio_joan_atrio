// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#technologies">Tecnologías</a></li>
        <li><a href="#formation">Formación</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
