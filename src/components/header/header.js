import React, { Component } from 'react';
import logo from '../../res/img/facehole_circle_gap_lowAlpha.png';
import './header.css';
import NavMenu from '../navMenu/navMenu';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-bezel">
          <header className="Header-header">
            <img src={logo} className="Header-logo" alt="logo" />
            <h1 className="Header-title">Jake Deacon</h1>
          </header>
          <NavMenu></NavMenu>
        </div>
      </div>
    );
  }
}

export default Header;
