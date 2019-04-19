import React, { Component } from 'react';
import './uciSpeakingEvent.scss';
import { withRouter } from 'react-router'
import microphone from '../../media/microphone.jpg'

// TODO add 'other work' section

class uciSpeakingEvent extends Component {
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
      <div className="uciSpeakingEvent">
        <div className='backToHome'>
          <i class="far fa-times-circle" type="button" onClick={e => this.handleBack(e)}></i>
        </div>
        <div className='project' style={{ animation: this.state.animation }}>
          <div className='projectDescription'>
            <h1>UCI Open House Event</h1>
            <hr />
            <div className='projectSubheading'>
              <h2 className='subheadingLeft'>UCI Division of Continuing Education</h2>
              <h2 className='subheadingRight'>April 2019</h2>
            </div>
            <p>As a former UCI bootcamp student, I was invited to speak with prospective attendees about my experience during the Full Stack Development program, which I attended in the Spring of 2018. In addition to presenting my insights and sharing examples of my classwork, I participated in QA sessions regarding the Full Stack Web Development program.</p>
          </div>
          <div className='projectPhoto'>
            <img src={microphone} alt='Microphone on stand' className='portfolioGraphics'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(uciSpeakingEvent);