import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import { CSSTransitionGroup } from 'react-transition-group'
import './navigation2.scss'
// import { Link, animateScroll as scroll } from "react-scroll";
// import './navigation.scss'

// TODO update navigation for scroll function

export default class Navigation2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this)
    }


    scrollToTop = () => {
        scroll.scrollToTop();
    };

    toggleNav = (e) => {
        e.preventDefault();
        console.log('click')
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {
        return (
            <div id='navigation'>
                {
                    this.state.navOpen ?
                        <div className='openNav'>
                            <div className='collapsibleNav' >
                                <i className="fas fa-bars" onClick={e => this.toggleNav(e)}></i>
                            </div>
                            <div id='navLinks'>
                                <Link
                                    activeClass="active"
                                    class='links'
                                    to="landing"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={700}
                                    onClick={e => this.toggleNav(e)}>Home</Link>
                                <Link
                                    activeClass="active"
                                    class='links'
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                    onClick={e => this.toggleNav(e)}>About</Link>
                                <Link
                                    activeClass="active"
                                    class='links'
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                    onClick={e => this.toggleNav(e)}>Portfolio</Link>
                                <a href='https://www.linkedin.com/in/tricia-leavitt/' target='_blank'><i className="fab fa-linkedin"></i></a>
                                <a href='https://github.com/tricialeav' target='_blank'><i className="fab fa-github-square"></i></a>
                                <a href='https://www.instagram.com/tricialeav/' target='_blank'><i className="fab fa-instagram"></i></a>
                                <a href="mailto:tricialeavittdevelopment@gmail.com?subject=Website Inquiry"><i className="far fa-envelope"></i></a>
                                <small>&copy;Tricia Leavitt 2019</small>
                            </div>
                        </div>
                        :
                        <div className='closeNav'>
                            <div className='collapsibleNav'>
                                <i className="fas fa-bars" onClick={e => this.toggleNav(e)}></i>
                            </div>
                        </div>
                }
            </div>
        );
    }
}