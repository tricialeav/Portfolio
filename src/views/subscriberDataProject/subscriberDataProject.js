import React, { Component } from 'react';
import './subscriberDataProject.scss';
import { withRouter } from 'react-router'
import code1 from '../../media/code1.jpg'

// TODO add 'other work' section
// TODO restore scroll on home page on exit

class subscriberDataProject extends Component {
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
      <div className="subscriberDataProject">
        <div className='backToHome'>
          <i class="far fa-times-circle" type="button" onClick={e => this.handleBack(e)}></i>
        </div>
        <div className='project' style={{ animation: this.state.animation }}>
          <div className='projectDescription'>
            <h1>Subscriber Data Project</h1>
            <hr />
            <div className='projectSubheading'>
              <h2 className='subheadingLeft'>Professional Project</h2>
              <h2 className='subheadingRight'>Winter 2018</h2>
            </div>
            <p>Worked with client to obtain relevant historical subscription data from various payment providers. Created ETL process for historical data using MySQL and Node.js to transform datasets contained on multiple tables based on client's backend requirements for ingestion. Worked with stakeholders and team members to verify project timelines and requirements.</p>
          </div>
          <div className='projectPhoto'>
            <img src={code1} alt='Code editor on computer screen' className='portfolioGraphics'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(subscriberDataProject);