import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1 className="logo">{this.props.logo}</h1>
            </div>
        );
    }
}

export default Header;
