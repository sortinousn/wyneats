import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      <div id="header-container">
        <div id="logo">
          <a href="/">
            <h1 className="wynlogo" alt="wynlogo">
              WynEats
            </h1>
          </a>
        </div>
        <div id="menu">
          <span className="menu-buttons">
            <a href="/findeats">FindEats</a>
          </span>
          <span className="menu-buttons">
            <a href="/myeats">MyEats</a>
          </span>
          <span className="menu-buttons">
            <a href="/about">About</a>
          </span>
          <span className="menu-buttons">
            <a href="/contact">Contact Us</a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Header;
