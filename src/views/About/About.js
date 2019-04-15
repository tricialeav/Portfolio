import React, { Component } from 'react';
import './About.scss';
import { Link } from "react-scroll";
import { skills } from '../../data/skills.js'
import placeholder from '../../media/placeholder.jpg'

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'all',
            animation: ''
        }

        this.filterSkills = this.filterSkills.bind(this);
        this.moveArrow = this.moveArrow.bind(this);
    }

    filterSkills = (e) => {
        e.preventDefault();
        this.setState({
            type: e.target.name
        })
        console.log(e.target.name)
    }

    moveArrow = (e) => {
        e.preventDefault();
        this.setState({
            animation: 'point-down 2s ease 1'
        })
    }

    render() {

        return (
            <div className="about" id='about'>
                <div className='aboutGrid'>
                    <div className='aboutColumns' id='aboutMe'>
                        <div className='aboutMeColumns'>
                            <div id='profileHeader'>
                                <img src={placeholder} alt='placeholder' id='profilePhoto' />
                                <p id='headline'>I'm a Full Stack Web Developer located in Newport Beach, CA and I'm passionate about front-end development.</p>

                            </div>
                            <hr />
                            <div id='aboutText'>
                                <p>I spent the first ten years of my career in the business world, where I sharpened my interpersonal communication, relationship building, and leadership skills.</p>
                                <p>After transitioning my career in early 2018, I have worked as a Software Developer and Freelancer.</p>
                                <p>I am also the Cofounder of <a href='https://www.meetup.com/Whiteboard-Warriors/' className='inlineLinks' target='_blank'>Whiteboard Warriors Meetup Group</a>, located in Irvine, CA. Our purpose is to provide hands-on technical interview practice to developers of all skill levels in a fun and collaborative environment.</p>
                                <p>In my free time, you will find me gardening, working on personal development projects, promoting the Meetup Group, taking pictures, and enjoying beautiful Southern California.</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutColumns'>
                        <h1>Skills <small>(hover)</small></h1>
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
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                >
                    <span class='vertical'>
                        <span>S</span>
                        <span>c</span>
                        <span>r</span>
                        <span>o</span>
                        <span>l</span>
                        <span>l</span>
                    </span>
                    <i class="fas fa-arrow-down"></i>
                </Link>
            </div>

        );
    }
}