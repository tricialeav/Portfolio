import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/about' component={About}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
