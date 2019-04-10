import React, { Component } from 'react';
import './About.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from '../../components/navigation/navigation'

export default class About extends Component {
    componentDidMount() {
        document.body.classList.add("reds");
    }
    componentWillUnmount() {
        document.body.classList.remove("reds");
    }
    render() {
        return (
            <div className="about">
                <div className='row'>
                    <Navigation />
                    <div></div>
                </div>
                
            </div>
        );
    }
}