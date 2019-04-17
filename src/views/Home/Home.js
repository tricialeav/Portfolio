import React, { Component } from 'react';
import Navigation2 from '../../components/navigation2/navigation2'
import Landing from '../Landing/Landing';
import About from '../About/About';
import Portfolio from '../portfolio/portfolio';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Navigation2 />
        <Landing id='landing'/>
        <About id='about'/>
        <Portfolio id='portfolio'/>
      </div>
    );
  }
}