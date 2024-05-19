import React from 'react';
import './Hero.css';

import hand_icon from '../assests/hand-icon.png'; // Make sure this path is correct
import hero_image from '../assests/girl-image.png';
import arrow_icon from '../assests/arrow-icon.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand-icon" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
                <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
}

export default Hero;
