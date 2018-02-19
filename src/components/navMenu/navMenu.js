import React, { Component } from 'react';
import './navMenu.css';
import MenuButton from '../menuButton/menuButton';

class NavMenu extends Component {
  render() {
    return (
      <div className="navMenu">
         <div className="Header-button-row">
          {/* TODO add these pages in */}
            <MenuButton link="about-me.html">About Me</MenuButton>
            <MenuButton link="resume.html">Resume</MenuButton>
            <MenuButton link="https://github.com/Jake0Tron/">My Github</MenuButton>
            {/* TODO: Set up a dropdown menu component */}
          </div>
      </div>
    );
 }
}

export default NavMenu;
