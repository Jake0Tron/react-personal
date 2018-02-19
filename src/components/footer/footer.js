import React, { Component } from 'react';
import './footer.css';
import NavMenu from '../navMenu/navMenu';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-bezel">
          <NavMenu></NavMenu>
        </div>
      </div>
    );
  }
}

export default Footer;
