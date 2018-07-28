import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo-white.png';

const Header = () => (
  <div className="header">
    <div className="header-logoContainer">
      <img src={logo} alt="logo" className="logo" />
    </div>

    <div className="header-textBox">
      <h1 className="headingPrimary">
        <span className="headingPrimary-Main">Mewow</span>
        <span className="headingPrimary-Second">Adopt don't shop</span>
      </h1>
      <a href="#" className="btn">
        Click to find out why life is so hard for our cats lol
      </a>
    </div>
  </div>
);

export default Header;
