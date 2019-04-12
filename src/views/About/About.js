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
                    <div className='aboutColumns' id='aboutMe'>
                        <h2 className='divTitle'>About Me</h2>
                        <div className='aboutMeColumns'>
                            <img src={placeholder} alt='placeholder' id='profilePhoto' />
                            <div id='aboutText'>
                                <p id='headline'>I'm a Full Stack Web Developer located in Newport Beach, CA who is passionate about front-end development.</p>
                                <p>I spent the first ten years of my career in the business world, where I sharpened my interpersonal communication, relationship building, and leadership skills.</p>
                                <p>In late 2017, after having pursued front-end development as a hobby, I enrolled in University of California, Irvine Division of Continuing Education's Full-Stack Web Development Bootcamp. Since completing the program, I have worked as a Software Developer as well as a Freelancer.</p>
                                <p>I am also the Cofounder of <a href='https://www.meetup.com/Whiteboard-Warriors/' className='inlineLinks' target='_blank'>Whiteboard Warriors Meetup Group</a>, located in Irvine, CA. Our purpose is to provide hands-on technical interview practice to developers of all skill levels in a fun and collaborative environment.</p>
                                <p>In my free time, you will find me gardening, working on personal development projects, promoting the Meetup Group, taking pictures, and enjoying beautiful Southern California.</p>
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