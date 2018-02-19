import React, { Component } from 'react';
import logo from '../../res/img/facehole_circle_gap_lowAlpha.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Jake Deacon</h1>
        </header>
      </div>
    );
  }
}

export default Header;
