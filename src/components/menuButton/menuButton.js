import React, { Component } from 'react';
import './menuButton.css';

class MenuButton extends Component {
    render() {
        return (
            <div className="MenuButton">
                <a href={this.props.link}>
                    <div>{this.props.children}</div>
                </a>
            </div>
        );
    }
}

export default MenuButton;
