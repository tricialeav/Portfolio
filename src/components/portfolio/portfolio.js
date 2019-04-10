import React, { Component } from 'react';
import Navigation from '../navigation/navigation'
import './portfolio.css'

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
                <div className='row'>
                    <Navigation />
                    <div></div>
                </div>
            </div>
        );
    }
}