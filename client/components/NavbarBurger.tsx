import React, { useState } from 'react';
import './NavbarBurger.css';

const NavbarBurger: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
};

export default NavbarBurger;
