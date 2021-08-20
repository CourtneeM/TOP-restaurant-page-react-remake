import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Samantha's Snowcones</h1>
      <nav>
        <p><Link to='/' className='nav-link'>Home</Link></p>
        <p><Link to='/menu' className='nav-link'>Menu</Link></p>
        <p><Link to='/contact' className='nav-link'>Contact</Link></p>
      </nav>
    </header>
  );
}

export default Header;
