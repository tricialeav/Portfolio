import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Landing.scss';

export default class Landing extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  constructor(props) {
    super(props);

    this.state = {
      increaseSize: false
    }

    this.increaseSize = this.increaseSize.bind(this);
  }

  increaseSize = () => {
    this.setState ({
      increaseSize: true
      });
    }

    decreaseSize = () => {
      this.setState ({
        increaseSize: false
        });
      }

  render() {
    return (
      <div className="landing">
        <h1 className='landingText'>Hi, I'm Tricia</h1>
        <h1 className='landingText'>and I'm a Web Developer</h1>
        <div id='buttonDiv'>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration= {500}
          > 
            <button id='learnMoreButton' onMouseEnter={this.increaseSize} onMouseLeave={this.decreaseSize}>About &nbsp;&nbsp;<i className={this.state.increaseSize ? 'fas fa-arrow-right increaseSize' : 'fas fa-arrow-right'}></i>
            </button>
          </Link>
          </div>
      </div>
    );
  }
}


