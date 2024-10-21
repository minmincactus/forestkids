import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="header">
      <ul className="nav-list">
        <li>
          <NavLink 
            exact="true" 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/gallery"
            className={({ isActive }) => 
              (isActive || location.pathname.includes('/art')) ? "active" : ""
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
