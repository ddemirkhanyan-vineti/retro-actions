import React from 'react';

const Navbar = () => (
  <nav className="navbar has-shadow">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="../">Retro Actions</a>
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item is-active">
            <a className="navbar-link">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;