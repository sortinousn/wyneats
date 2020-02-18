import React from 'react';

function Header() {
  return (
    <>
      <div id="header-container">
        <div id="logo">
          <a className="logo-tag" href="/">
            WynEats
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
