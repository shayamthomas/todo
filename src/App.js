import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'

//@@@@@@@@@@@@@@ IMPORTING STYLES @@@@@@@@@@@@@@
import './assets/css/main.css';
import './assets/js/sweetalert/sweetalert.css';
//@@@@@@@@@@@@@@ IMPORTING STYLES @@@@@@@@@@@@@@

//@@@@@@@@@@@@@@ IMPORTING COMPONETS @@@@@@@@@@@@@@
import Todo from './components/todo';
//@@@@@@@@@@@@@@ IMPORTING COMPONETS @@@@@@@@@@@@@@


class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={ Todo } />
            </Router>
        );
    }
}

export default App;
