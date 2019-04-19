import React, { Component } from 'react';
import './userPortal.scss';
import { withRouter } from 'react-router'
import code2 from '../../media/code2.jpg'

// TODO add 'other work' section
// TODO restore scroll on home page on exit

class userPortal extends Component {
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
      <div className="userPortal">
        <div className='backToHome'>
          <i class="far fa-times-circle" type="button" onClick={e => this.handleBack(e)}></i>
        </div>
        <div className='project' style={{ animation: this.state.animation }}>
          <div className='projectDescription'>
            <h1>User Portal Project</h1>
            <hr />
            <div className='projectSubheading'>
              <h2 className='subheadingLeft'>Professional Project</h2>
              <h2 className='subheadingRight'>Fall 2018</h2>
            </div>
            <p>Led front-end development and worked with stakeholders to determine project requirements and scope. Revised and updated project code, including: API requests and data ingestion (php), database management (mySQL), and front-end development (Vue.js). Created Admin Portal pages and API functionality to access user records. Provided QA up to and following the release of the product. Enhanced site security protocols and verified data integrity.</p>
          </div>
          <div className='projectPhoto'>
            <img src={code2} alt='Laptop with code editor on screen' className='portfolioGraphics'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(userPortal);