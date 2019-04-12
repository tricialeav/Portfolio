import React, { Component } from 'react';
import './About.scss';
import Navigation from '../../components/navigation/navigation'
import { skills } from '../../data/skills.js'

// TODO add scroll feature

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'all'
        }

        this.filterSkills = this.filterSkills.bind(this);
    }

    componentDidMount() {
        document.body.classList.add("reds");
    }
    componentWillUnmount() {
        document.body.classList.remove("reds");
    }

    filterSkills = (e) => {
        e.preventDefault();
        this.setState({
            type: e.target.name
        })
        console.log(e.target.name)
    }

    render() {

        return (
            <div className="about" id='about'>
                <Navigation />
                <div className='aboutGrid'>
                    <h2 className='divTitle'>Skills</h2>
                    <div id='filterButtons'>
                        <button onClick={e => this.filterSkills(e)} name='all' className='filterSkillButton' >All</button>
                        <button onClick={e => this.filterSkills(e)} name='HTML' className='filterSkillButton'>HTML</button>
                        <button onClick={e => this.filterSkills(e)} name='CSS' className='filterSkillButton'>CSS</button>
                        <button onClick={e => this.filterSkills(e)} name='JavaScript' className='filterSkillButton'>Javascript</button>
                        <button onClick={e => this.filterSkills(e)} name='Database' className='filterSkillButton'>Database</button>
                        <button onClick={e => this.filterSkills(e)} name='PHP' className='filterSkillButton'>PHP</button>
                        <button onClick={e => this.filterSkills(e)} name='Other' className='filterSkillButton'>Other</button>
                    </div>
                    <div className='aboutRow'>
                        {skills.map(({ icon, skill, years, type }) =>
                            (
                                type === this.state.type || this.state.type === "all" ? (
                                    <div className='flipCard' value={type} key={skill}>
                                        <div className='flipCardInner' >
                                            <div >
                                                <div className='flipCardFront' >
                                                    <i className={icon} ></i>
                                                    <h5>{skill}</h5>
                                                </div>
                                                <div className='flipCardBack'>
                                                    <h5>{years}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>) : (
                                        null
                                    )
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}