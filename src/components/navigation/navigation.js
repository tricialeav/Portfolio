import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import './navigation.scss'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <NavLink exact={true} activeClassName='is-active' className='navigationLink' to='/'>Home</NavLink>
                <NavLink activeClassName='is-active' className='navigationLink' to='/about'>About</NavLink>
                <NavLink activeClassName='is-active' className='navigationLink' to='/portfolio'>Portfolio</NavLink>
                <NavLink activeClassName='is-active' className='navigationLink' to='/contact'>Contact</NavLink>
            </div>
        );
    }
}