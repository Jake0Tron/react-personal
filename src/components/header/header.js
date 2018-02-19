import React, { Component } from 'react';
import logo from '../../res/img/facehole_circle_gap_lowAlpha.png';
import './header.css';
import MenuButton from '../menuButton/menuButton';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div className="Header-bezel">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Jake Deacon</h1>
        </header>
        <MenuButton link="about-me.html">About Me</MenuButton>
        <MenuButton link="resume.html">Resume</MenuButton>
        <MenuButton link = "https://github.com/Jake0Tron/">My Github</MenuButton>
        {/* TODO: Set up a dropdown menu */}
      </div>        
      </div>
    );
  }
}

export default Header;
