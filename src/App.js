import React, { Component } from 'react';
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';
import Home from './views/Home/Home';
import UCI from './views/uciSpeakingEvent/uciSpeakingEvent';
import SDP from './views/subscriberDataProject/subscriberDataProject';
import Portal from './views/userPortal/userPortal';
import Game from './views/UCIFinalProject/UCIFinalProject';

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
            <Route path='/subscriber-data-project' component={withRouter(SDP)} />
            <Route path='/user-portal' component={withRouter(Portal)} />
            <Route path='/game' component={withRouter(Game)} />
        </Router>
      </div>
    );
  }
}

export default App;
