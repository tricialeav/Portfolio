import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './navigation.scss'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to='/' className='navigationLink'>Home</Link>
                <Link to='/about' className='navigationLink'>About</Link>
                <Link to='/portfolio' className='navigationLink'>Portfolio</Link>
                <Link to='/contact' className='navigationLink'>Contact</Link>
            </div>
        );
    }
}