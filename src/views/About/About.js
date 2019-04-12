import React, { Component } from 'react';
import './About.scss';
import Navigation from '../../components/navigation/navigation'
import { skills } from '../../data/skills.js'

// TODO add scroll feature

export default class About extends Component {

    componentDidMount() {
        document.body.classList.add("reds");
    }
    componentWillUnmount() {
        document.body.classList.remove("reds");
    }


    render() {

        return (
            <div className="about" id='about'>
                <Navigation />
                <div className='aboutGrid'>
                    <h2 className='divTitle'>Skills</h2>
                    <div className='aboutRow'>
                        {skills.map(({ icon, skill, years, i }) => {
                            return (
                                <div className='flipCard'>
                                    <div className='flipCardInner'>
                                        <div key={i}>
                                            <div className='flipCardFront'>
                                                <i className={icon} key={i}></i>
                                                <h5 key={i}>{skill}</h5>
                                            </div>
                                            <div class='flipCardBack'>{years}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        );
    }
}