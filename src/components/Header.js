import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>

    <div className="navbar-header">
      <NavLink to="/" className="navbar-brand">
        Movie Discovery
      </NavLink>
    </div>

  </div>
);

export default Header;
