import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>LAB - Wikicountries</Link>
      </nav>
    </div>
  );
};

export default NavBar;
