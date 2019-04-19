import React, { Component } from 'react';
import './UCIFinalProject.scss';
import { withRouter } from 'react-router'
import game from '../../media/game.png'

// TODO add 'other work' section
// TODO restore scroll on home page on exit

class UCIFinalProject extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this)

    this.state = {
      animation: 'fade-in 2s ease 1'
    }

  }

  componentDidMount() {
      window.scrollTo(0, 0);
  }

  handleBack = (e) => {
    e.preventDefault();
    this.setState({
      animation: 'fade-out 1s ease 1'
    })
    window.history.back(-1);
  }

  render() {
    return (
      <div className="UCIFinalProject">
        <div className='backToHome'>
          <i class="far fa-times-circle" type="button" onClick={e => this.handleBack(e)}></i>
        </div>
        <div className='project' style={{ animation: this.state.animation }}>
          <div className='projectDescription'>
            <h1>UCI Final Project</h1>
            <hr />
            <div className='projectSubheading'>
              <h2 className='subheadingLeft'>School Project</h2>
              <h2 className='subheadingRight'>Spring 2018</h2>
            </div>
            <p>Utilized the Unity3D game engine to create a playable desktop game for private use. Designed level based on downloaded assets from the Unity Asset Store. Developed gameplay mechanics and worked within Unity’s built-in physics options. Wrote C# game code for character movement, animation, score and health calculations.</p>

            <p>Generated MERN app to display the contents of the associated game. Designed page layouts using Reactstrap (React Bootstrap 4 components) and Photoshop. Built back-end server functionality.</p>

            <p>Addtl Tools Used: Git, Axios, Body-parser, MongoDB, Mongoose, and Moment.</p>
          </div>
          <div className='projectPhoto'>
            <a href="https://agile-springs-18554.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={game} alt='Screenshot of Crystal Collector Game with dragon character' className='portfolioGraphics'></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UCIFinalProject);