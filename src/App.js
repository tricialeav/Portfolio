import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import './App.scss';
import Home from './views/Home/Home';
import UCI from './components/uciSpeakingEvent/uciSpeakingEvent';

// TODO enable scrolling animation

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={withRouter(Home)} />
            <Route path="/uci" component={withRouter(UCI)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
