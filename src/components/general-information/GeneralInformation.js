import React, { Component } from 'react';
import './GeneralInformation.css';

class GeneralInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
        };

        this.nameHandle = this.nameHandle.bind(this);
    }

    nameHandle() {
        this.setState({
            name: 'test',
        });
    }

    render() {
        return (
            <div className="generalInformation">
                <h1 className="generalInfoTitle">General Info</h1>
                <button onClick={this.nameHandle}></button>
                <h2 className="name">Name: {this.state.name}</h2>
                <h2 className="email">Email: {this.state.email}</h2>
                <h2 className="phoneNumber">Phone Number: {this.state.phoneNumber}</h2>
            </div>
        );
    }
}

export default GeneralInformation;
