import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { hash } = useLocation(); // Get the hash from the URL

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
}, [hash]);

  useEffect(() => {
      if (hash) {
          const section = document.querySelector(hash);
          if (section) {
              section.scrollIntoView({ behavior: "smooth" });
          }
      }
  }, [hash]); // Run whenever hash changes

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => { // Delay ensures rendering completes first
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="navbar">
      
      <div className="left-section">
      
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo"><Link to="/">Bhasri <span className='lower'>Looms & Weave</span></Link></div>
       
      </div>
      <div ></div>
      <div ref={menuRef} className={`menu ${isOpen ? 'active' : ''}`}>
        <div className="logo-menu"><Link to="/" onClick={toggleMenu}>Bhasri <span className='lower'>Looms & Weave</span></Link></div>
        <div className="menu-items">
          <Link to="/#sarees-collection" onClick={toggleMenu}>Saree Collection</Link>
          <Link to="/#discover" onClick={toggleMenu}>About Bhasri</Link>
          <Link to="/#contact-us" onClick={toggleMenu}>Contact Us</Link>
          <input className="search-input" type="text" placeholder="Search by saree code.." />
        </div>
        
      </div>
      
    </nav>
  );
}

export default Navbar;