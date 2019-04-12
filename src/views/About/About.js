import React, { Component } from 'react';
import './About.scss';
import Navigation from '../../components/navigation/navigation'
import { skills } from '../../data/skills.js'
import placeholder from '../../media/placeholder.jpg'

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
                    <div className='aboutColumns'>
                        <h2 className='divTitle'>About Me</h2>
                        <div className='aboutMeColumns'>
                            <img src={placeholder} alt='placeholder' id='profilePhoto' />
                            <div id='aboutText'>
                                <h4>Location:</h4> 
                                <p>Newport Beach, CA</p>
                                <h4>Education:</h4> 
                                <p>Bachelor's Degree in Business Administration, University of Denver 2008<br/>Certificate of Completion in Web Development, University of California, Irvine 2018</p>
                                <h4>Volunteer:</h4>
                                <h4>Co-Organizer</h4>
                                <p>Whiteboard Warriors Meetup Group</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutColumns'>
                        <h2 className='divTitle'>Skills</h2>
                        {/* <div id='filterButtons'>
                        <button onClick={e => this.filterSkills(e)} name='all' className='filterSkillButton' >All</button>
                        <button onClick={e => this.filterSkills(e)} name='HTML' className='filterSkillButton'>HTML</button>
                        <button onClick={e => this.filterSkills(e)} name='CSS' className='filterSkillButton'>CSS</button>
                        <button onClick={e => this.filterSkills(e)} name='JavaScript' className='filterSkillButton'>Javascript</button>
                        <button onClick={e => this.filterSkills(e)} name='Database' className='filterSkillButton'>Database</button>
                        <button onClick={e => this.filterSkills(e)} name='PHP' className='filterSkillButton'>PHP</button>
                        <button onClick={e => this.filterSkills(e)} name='Other' className='filterSkillButton'>Other</button>
                    </div> */}
                        <div className='cardRow'>
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
            </div>
        );
    }
}