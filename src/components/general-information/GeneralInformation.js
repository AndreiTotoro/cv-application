import React, { Component } from 'react';
import './GeneralInformation.css';

class GeneralInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="generalInformation">
                <h1 className="generalInfoTitle">General Info</h1>
                <h2 className="name">Name: {this.props.name}</h2>
                <h2 className="email">Email: {this.props.email}</h2>
                <h2 className="phoneNumber">Phone Number: {this.props.phoneNumber}</h2>
            </div>
        );
    }
}

export default GeneralInformation;
