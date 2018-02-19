import React, { Component } from 'react';
import './menuButton.css';


class MenuButton extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <div className="MenuButton">
                    <div>{this.props.children}</div>
                </div>
            </a>

        );
    }
}

export default MenuButton;
