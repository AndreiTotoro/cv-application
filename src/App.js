import React, { Component } from 'react';
import Header from './components/header/Header';
import GeneralInformation from './components/general-information/GeneralInformation';
import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header logo="Andrew's CV Creator" />
                <GeneralInformation name="Test" phoneNumber="013213" email="test@gmail.com" />
            </>
        );
    }
}

export default App;
