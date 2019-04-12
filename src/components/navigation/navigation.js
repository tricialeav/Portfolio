import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import './navigation.scss'

// TODO update navigation for scroll function

export default class Navigation extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return (
            <div className="navigation">
                {/* <NavLink exact={true} activeClassName='is-active' className='navigationLink' to='/'>Home</NavLink>
                <NavLink activeClassName='is-active' className='navigationLink' to='/about'>About</NavLink>
                <NavLink activeClassName='is-active' className='navigationLink' to='/portfolio'>Portfolio</NavLink>
                <NavLink activeClassName='is-active' className='navigationLink' to='/contact'>Contact</NavLink> */}
                <Link
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >About</Link>
                <a href='https://www.linkedin.com/in/tricia-leavitt/' target='_blank'><i className="fab fa-linkedin navigationLink"></i></a>
                <a href='https://github.com/tricialeav' target='_blank'><i className="fab fa-github-square navigationLink"></i></a>                
                <a href="mailto:tricialeavittdevelopment@gmail.com?subject=Website Inquiry"><i className="far fa-envelope navigationLink"></i></a>
            </div>
        );
    }
}