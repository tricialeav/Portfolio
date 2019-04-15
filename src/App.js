import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
// import * as Scroll from 'react-scroll';
import './App.scss';
import Navigation2 from './components/navigation2/navigation2'
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Portfolio from './views/portfolio/portfolio';
// import Contact from './components/contact/contact';
// import Footer from './components/footer/footer';


// TODO enable scrolling animation

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation2 />
        <Landing />
        <About />
        <Portfolio />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
