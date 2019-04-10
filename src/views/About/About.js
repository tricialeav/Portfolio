import React, { Component } from 'react';
import './About.css';
import Navigation from '../../components/navigation/navigation'

// TODO refactor cards so they are dynamic and add scroll feature



export default class About extends Component {
    componentDidMount() {
        document.body.classList.add("reds");
    }
    componentWillUnmount() {
        document.body.classList.remove("reds");
    }

    render() {
        return (
            <div className="about">
                <Navigation />
                <div className='aboutGrid'>
                    <h1 className='divTitle'>About Me</h1>
                    <h2 className='divTitle'>Skills</h2>
                    <div className='aboutRow'>
                        <div className='aboutCard'>
                            <i class="fab fa-html5 icon"></i>
                            <h5>HTML</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-css3-alt icon"></i>
                            <h5>CSS</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-sass icon"></i>
                            <h5>SASS</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-bootstrap icon"></i>
                            <h5>Bootstrap</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-js-square icon"></i>
                            <h5>JavaScript</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fas fa-code icon"></i>
                            <h5>jQuery</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-react icon"></i>
                            <h5>React</h5>
                        </div>
                    </div>
                    <div className='aboutRow'>
                        <div className='aboutCard'>
                            <i class="fab fa-vuejs icon"></i>
                            <h5>Vue.js</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-node-js icon"></i>
                            <h5>Node</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fas fa-database icon"></i>
                            <h5>MySQL</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fas fa-database icon"></i>
                            <h5>MongoDB</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-php icon"></i>
                            <h5>PHP</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-laravel icon"></i>
                            <h5>Laravel</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-github-square icon"></i>
                            <h5>GitHub</h5>
                        </div>
                    </div>
                    <div className='aboutRow'>
                        <div className='aboutCard'>
                            <i class="fab fa-jira icon"></i>
                            <h5>Jira</h5>
                        </div>
                        <div className='aboutCard'>
                            <i class="fab fa-adobe icon"></i>
                            <h5>PhotoShop</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}