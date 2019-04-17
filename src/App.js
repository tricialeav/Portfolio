import React, { Component } from 'react';
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';
import Home from './views/Home/Home';
import UCI from './views/uciSpeakingEvent/uciSpeakingEvent';

// TODO enable scrolling animation. Change to BrowserRouter once hosted.

class App extends Component {
  render() {

    const customHistory = createBrowserHistory();

    return (
      <div className="App">
        <Router history={customHistory}>
            <Route exact path='/' component={withRouter(Home)} />
            <Route path='/home' component={withRouter(Home)} />
            <Route path='/uci' component={withRouter(UCI)} />
        </Router>
      </div>
    );
  }
}

export default App;
