import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './navigation2.scss'

// TODO update navigation for scroll function

export default class Navigation2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navType: 'nav'
        }

        this.toggleNav = this.toggleNav.bind(this)
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    toggleNav = (e) => {
        e.preventDefault();
        if (this.state.navType === 'nav' || this.state.navType === 'closeNav') {
            this.setState({
                navType: 'openNav'
            })
        } else if (this.state.navType === 'openNav') {
            this.setState({
                navType: 'closeNav'
            })
        }

    }

    render() {
        return (
            <div id='navigation'>
                <div className={this.state.navType}>
                    <div className='collapsibleNav' >
                        <i className="fas fa-bars" onClick={e => this.toggleNav(e)}></i>
                    </div>
                    {this.state.navType === 'openNav' ?
                        <div id='navLinks'>
                            <Link
                                activeClass="active"
                                to="landing"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={700}
                                onClick={e => this.toggleNav(e)}>Home</Link>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={700}
                                onClick={e => this.toggleNav(e)}>About</Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-1}
                                duration={700}
                                onClick={e => this.toggleNav(e)}>Portfolio</Link>
                            <a href='https://www.linkedin.com/in/tricia-leavitt/' target='_blank'><i className="fab fa-linkedin"></i></a>
                            <a href='https://github.com/tricialeav' target='_blank'><i className="fab fa-github-square"></i></a>
                            <a href='https://www.instagram.com/tricialeav/' target='_blank'><i className="fab fa-instagram"></i></a>
                            <a href="mailto:tricialeavittdevelopment@gmail.com?subject=Website Inquiry"><i className="far fa-envelope"></i></a>
                            <small>&copy;Tricia Leavitt 2019</small>
                        </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}