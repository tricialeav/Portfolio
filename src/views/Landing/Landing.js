import React, { Component } from 'react';
import './Landing.css';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increaseSize: false
    }

    this.increaseSize = this.increaseSize.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("background-colors");
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
        <h1>Hi, I'm Tricia</h1>
        <h1>and I'm a Web Developer</h1>
        <div id='buttonDiv'>
          <a href='/portfolio'><button id='learnMoreButton' onMouseEnter={this.increaseSize} onMouseLeave={this.decreaseSize}>My Work &nbsp;&nbsp;<i className={this.state.increaseSize ? 'fas fa-arrow-right increaseSize' : 'fas fa-arrow-right'}></i></button></a>
        </div>
      </div>
    );
  }
}


