import React, { Component } from 'react';
import './EducationalExperience.css';

class EducationalExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="educationalExperience">
                <h1 className="schoolName">School name: {this.props.schoolName}</h1>
                <h2 className="studyTitle">Study title: {this.props.studyTitle}</h2>
                <h2 className="date">Date: {this.props.date}</h2>
            </div>
        );
    }
}

export default EducationalExperience;
