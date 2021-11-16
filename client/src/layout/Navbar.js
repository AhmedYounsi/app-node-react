import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {



  return (
    <nav className="navbar bg-dark">
      <h2>
        <Link to="/">
          <i className="fas fa-code" /> AddInn
        </Link>
      </h2>


    </nav>
  );
};



export default (Navbar);