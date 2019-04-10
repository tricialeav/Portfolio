import React, { Component } from 'react';
import Navigation from '../navigation/navigation'
import './contact.css'

export default class Contact extends Component {
    componentDidMount() {
        document.body.classList.add("greens");
    }
    componentWillUnmount() {
        document.body.classList.remove("greens");
    }
    render() {
        return (
            <div className="portfolio">
                <div className='row'>
                    <Navigation />
                    <div></div>
                </div>
            </div>
        );
    }
}