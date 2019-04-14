import React, { Component } from 'react';
import './portfolio.scss'
import microphone from '../../media/microphone.jpg'
import comingSoon from '../../media/coming_soon.jpg'
import code1 from '../../media/code1.jpg'
import code2 from '../../media/code2.jpg'
import game from '../../media/game.png'


export default class Portfolio extends Component {
    // constructor(props) {
    //     super(props); 

    //     this.state =  {
    //         hovered: false,
    //         activeCard: ''
    //     }

        // this.blurOthers = this.blurOthers.bind(this)
        // this.resetBlur = this.resetBlur.bind(this)
    // }

    componentDidMount() {
        document.body.classList.add("blues");
    }
    componentWillUnmount() {
        document.body.classList.remove("blues");
    }

    // blurOthers = (e) => {
    //     console.log(e.target.value)
    //     this.setState ({
    //         activeCard: e.target.value,
    //         hovered: !this.state.hovered
    //     })
    // }

    // resetBlur = (id) => {
    //     console.log(id)
    //     this.setState ({
    //         activeCard: '',
    //         hovered: !this.state.hovered
    //     })
    // }

    render() {
        return (
            <div className="portfolio" style={{background: 'linear-gradient(-60deg, #23A6D5, rgb(23, 205, 162))', backgroundSize: '200% 200%'}}>
                <div id='portfolioContainer'>
                <h1>PORTFOLIO</h1>
                    <ul id='portfolioList'>
                        <li className='portfolioCard' value='UCI'>
                            <img src={microphone} alt='Microphone on stand' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>UCI Open House</h4>
                                <p>Speaking Event</p>
                                <p>April 2019</p>
                            </div>
                        </li>
                        
                        <li className='portfolioCard' value='symptom'>
                            <img src={comingSoon} alt='Coming soon placeholder' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>Symptom Tracker Desktop App</h4>
                                <p>Personal Project</p>
                                <p>In Development - Spring 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={comingSoon} alt='Coming soon placeholder' className='portfolioGraphics' value='3'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>Whiteboard Warriors Website</h4>
                                <p>Personal Project</p>
                                <p>In Development - Spring 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard' onMouseEnter={this.blur} value='4'>
                            <img src={code1} alt='Code editor on computer screen' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>Subscriber Data Project</h4>
                                <p>Professional Work</p>
                                <p>Fall 2018</p>
                            </div>
                        </li>
                        <li className='portfolioCard' onMouseEnter={this.blur} value='5'>
                            <img src={code2} alt='Code editor on computer screen' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>User Portal Project</h4>
                                <p>Professional Work</p>
                                <p>Winter 2018</p>
                            </div>
                        </li>
                        <li className='portfolioCard' onMouseEnter={this.blur} value='6'>
                            <img src={game} alt='Screenshot of Crystal Collector Game with dragon character' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>UCI Final Project</h4>
                                <p>School Project</p>
                                <p>Spring 2018</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        );
    }
}