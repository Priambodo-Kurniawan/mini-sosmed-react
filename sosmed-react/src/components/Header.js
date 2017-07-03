import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../helpers/auth'

export default (props) => (
  <div>
    <nav className="nav-extended">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">Logo</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/" className="navbar-brand">Home</Link></li>
          <li><Link to="/dashboard" className="navbar-brand">Dashboard</Link></li>
            {props.authed
            ? <li
                style={{border: 'none', background: 'transparent'}}
                onClick={() => {
                  logout()
                }}
                className="navbar-brand">Logout</li>
            : <span>
                <li>
                  <Link to="/login" className="navbar-brand">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="navbar-brand">Register</Link>
                </li>
              </span>}
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a href="sass.html">Home</a></li>
          <li><a href="badges.html">Dashboard</a></li>
          <li><a href="collapsible.html">Login</a></li>
          <li><a href="collapsible.html">Register</a></li>
        </ul>
      </div>
    </nav>
  </div>
);
