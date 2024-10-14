import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header-Footer.css';


function Header() {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="identite">JOHN DOE</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Realisations">Réalisations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Me contacter</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
