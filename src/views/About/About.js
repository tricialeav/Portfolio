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
                    <div className='aboutRow'>{skills.map(({ icon, skill, i }) => {
                        return (
                            <div className='aboutCard' key={i}>
                                <i className={icon} key={i}></i>
                                <h5 key={i}>{skill}</h5>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        );
    }
}