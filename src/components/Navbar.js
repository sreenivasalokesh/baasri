import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">baasri</Link></div>
      <div className="menu">
        <Link to="/sarees">Saree Collection</Link>
        <Link to="/about">About Baasri</Link>
        <Link to="/contact-us">Contact Us</Link>
        <input type="text" placeholder="Search by saree code.." />
      </div>
    </nav>
  );
}

export default Navbar;