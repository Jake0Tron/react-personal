import React, { Component } from 'react';
import './footer.css';
import NavMenu from '../navMenu/navMenu';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
         <NavMenu></NavMenu>
      </div>
    );
  }
}

export default Footer;
