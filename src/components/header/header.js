import React, { Component } from 'react';
import logo from '../../res/img/facehole_brain_mirror.png';
import './header.css';
import NavMenu from '../navMenu/navMenu';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-bezel">
            <img src={logo} className="Header-logo" alt="logo" />
            <h1 className="Header-title">Jake Deacon</h1>
          <NavMenu></NavMenu>
        </div>
      </div>
    );
  }
}

export default Header;
