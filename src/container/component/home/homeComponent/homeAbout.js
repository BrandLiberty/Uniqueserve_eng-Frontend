import React, { useState, useEffect, useLayoutEffect } from 'react'
import '../../../assets/css/component/home/homeComponent/homeAbout.css'
import Logo from '../../../assets/images/Uniqueserve Logo.png'
import slider1 from '../../../assets/images/Photos/11.png'
import slider2 from '../../../assets/images/Photos/15.png'
import slider3 from '../../../assets/images/Photos/16.png'
import slider4 from '../../../assets/images/Photos/14.png'
const HomeAbout = () => {


    const images = [slider1, slider2, slider3, slider4];

    const [currentIndex, setCurrentIndex] = useState(0);
    // let currentIndex = 0;
    const handleIndex = ()=>{
        setTimeout(async()=>{setCurrentIndex((currentIndex+1)%4)},5000)
        // //console.log(a)
    }
    useEffect(()=>{
        handleIndex()
    },[currentIndex])

    // ImageSwapper();
    return (
        <section id="home-about" className="home-about-section">
            <div className="home-about-main">
                <div className="home-about-left">
                    <div className="home-about-logo">
                        <img src={Logo} alt="Logo" className='about-img' />
                    </div>
                    <div className="home-about-content">
                        <p className="about-our-approach-content">We believe in engineering solutions that not only meet the demands of today but also safeguard the world for future generations. Our team is dedicated to integrating environmentally friendly practices into every aspect of our projects. From utilizing <span className="home-heighlight">renewable energy sources</span> to designing <span className="home-heighlight">energy-efficient systems</span>, we strive to minimize our environmental footprint.</p>
                    </div>
                    <div className="home-about-button">
                        <a href='/about'>
                        <button type="button" class="slide-btn-updated slide-btn">
                            explore more
                        </button></a>
                    </div>
                </div>
                <div className="home-about-right">
                    <img src={images[currentIndex]} alt="Slider Images" />
                </div>
            </div>
        </section>
    )
}

export default HomeAbout