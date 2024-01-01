import React from 'react'
import Slider from '../../adOns/molecules/Slider'
import Social from './homeComponent/homeService.js'
import About from './homeComponent/homeAbout.js'
import Section from './homeComponent/homeSection.js'
import '../../assets/css/component/home/home.css'
import governance from '../../assets/images/Photos/14.png'
import social from '../../assets/images/Photos/20.png'
import esg from '../../assets/images/home/ESG.jpg'
import ContactComp from '../../atoms/contactComponent.js'


const Home = () => {

    // const el = useRef(null)

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: ["Mehanical Engineering", "Electronic Engineering", "Civil Engineering", "Electrical Engineering"], // Strings to display
    //         // Speed settings, try diffrent values untill you get good results
    //         startDelay: 300,
    //         typeSpeed: 100,
    //         backSpeed: 100,
    //         backDelay: 100,
    //         loop: true,
    //         showCursor: false
    //     });

    //     // Destropying
    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);

    return (
        <>
            <Slider />

            <section className="home-about-us we-do section-header text-center section-bg-color we-do-updated">

                <div className="home-about-us-head heading-font-size home-background-clip">
                    Uniqueserve Engineering
                    Pvt.Ltd.
                </div>
            </section>

            <About />
            <Section />
            <Social />
            <ContactComp />
            
        </>
    )
}


export default Home