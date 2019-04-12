import React, { Component } from 'react';
import Navigation from '../navigation/navigation'
import './portfolio.scss'
import microphone from '../../media/microphone.jpg'
import comingSoon from '../../media/coming_soon.jpg'
import code1 from '../../media/code1.jpg'
import code2 from '../../media/code2.jpg'
import game from '../../media/game.png'


export default class Portfolio extends Component {
    componentDidMount() {
        document.body.classList.add("blues");
    }
    componentWillUnmount() {
        document.body.classList.remove("blues");
    }
    render() {
        return (
            <div className="portfolio">
                <div id='portfolioContainer'>
                    <ul id='portfolioList'>
                    <li className='portfolioCard'>
                            <img src={microphone} alt='Microphone on stand' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>UCI Open House</h4>
                                <p>Speaking Event</p>
                                <p>April 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={comingSoon} alt='Coming soon placeholder' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>Symptom Tracker Desktop App</h4>
                                <p>Personal Project</p>
                                <p>In Development - Spring 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={comingSoon} alt='Coming soon placeholder' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>Whiteboard Warriors Website</h4>
                                <p>Personal Project</p>
                                <p>In Development - Spring 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={code1} alt='Code editor on computer screen' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>Subscriber Data Project</h4>
                                <p>Professional Work</p>
                                <p>Fall 2018</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={code2} alt='Code editor on computer screen' className='portfolioGraphics'></img>
                            <span></span>
                            <div className='portfolioText'>
                                <h4>User Portal Project</h4>
                                <p>Professional Work</p>
                                <p>Winter 2018</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
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