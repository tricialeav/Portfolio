import React, { Component } from 'react';
import './portfolio.scss'
import microphone from '../../media/microphone.jpg'
import comingSoon from '../../media/coming_soon.jpg'
import code1 from '../../media/code1.jpg'
import code2 from '../../media/code2.jpg'
import game from '../../media/game.png'


export default class Portfolio extends Component {

    render() {
        return (
            <div className="portfolio">
                <div id='portfolioContainer'>
                <h1>My Work</h1>
                    <ul id='portfolioList'>
                        <li className='portfolioCard'>
                            <img src={microphone} alt='Microphone on stand' className='portfolioGraphics'></img>
                            <div className='portfolioText'>
                                <h4>UCI Open House</h4>
                                <p>Speaking Event</p>
                                <p>April 2019</p>
                            </div>
                        </li>
                        
                        <li className='portfolioCard'>
                            <img src={comingSoon} alt='Coming soon placeholder' className='portfolioGraphics'></img>
                            <div className='portfolioText'>
                                <h4>Symptom Tracker App</h4>
                                <p>Personal Project</p>
                                <p>In Development - Spring 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={comingSoon} alt='Coming soon placeholder' className='portfolioGraphics'></img>
                            <div className='portfolioText'>
                                <h4>Whiteboard Warriors Website</h4>
                                <p>Personal Project</p>
                                <p>In Development - Spring 2019</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={code1} alt='Code editor on computer screen' className='portfolioGraphics'></img>
                            <div className='portfolioText'>
                                <h4>Subscriber Data Project</h4>
                                <p>Professional Work</p>
                                <p>Fall 2018</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <img src={code2} alt='Code editor on computer screen' className='portfolioGraphics'></img>
                            <div className='portfolioText'>
                                <h4>User Portal Project</h4>
                                <p>Professional Work</p>
                                <p>Winter 2018</p>
                            </div>
                        </li>
                        <li className='portfolioCard'>
                            <a href='https://agile-springs-18554.herokuapp.com/' target='_blank'><img src={game} alt='Screenshot of Crystal Collector Game with dragon character' className='portfolioGraphics'></img>
                            <div className='portfolioText'>
                                <h4>UCI Final Project</h4>
                                <p>School Project</p>
                                <p>Spring 2018</p>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        );
    }
}