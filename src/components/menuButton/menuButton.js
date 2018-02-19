import React, { Component } from 'react';
import './menuButton.css';

class MenuButton extends Component {
  render(props) {
    return (
     <a href={this.props.link}>
         <div>{this.props.children}</div>
     </a>
    );
  }
}

export default MenuButton;
