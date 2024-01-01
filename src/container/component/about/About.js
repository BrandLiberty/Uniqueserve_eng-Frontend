import React, { useState } from 'react'
import '../../assets/css/component/about/about.css'
import cert1 from '../../assets/images/certificates/MITSC.jpg'
import cert2 from '../../assets/images/certificates/certificate2.jpg'
const About = () => {

    const [index, setIndex] = useState(0)

    const certArr = [{ image: cert1, text: ' Maharashtra Information Technology Support Center' }, { image: cert2, text: 'The Week for Safe Use of Electrical Energy and Allied Appliances' }]

    const handleLeft = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    const handleRight = () => {
        if (index < certArr.length - 1) {
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <section className="about-part">
                <div className="container">
                    <div className="about-part-details text-center">
                        {/*<h2 style={{left: 27}}>about us</h2>*/}
                        <div className="about-part-content">
                            <div className="breadcrumbs">
                                <div className="container">
                                    <ol className="breadcrumb" style={{ left: 20 }}>
                                        {/*} <li><a href="/home">home</a><span>//</span></li>
    <li><a href="/about">about</a></li>*/}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="join-us we-do section-header text-center we-do-updated">
                <div className='home-about-us-head heading-font-size background-clip'>WE INVITE LIKE-MINDED PEOPLE
                    TO
                    JOIN US
                </div>
                <p className="join-us-content">We will make a global change by finding alternatives to depleting energy sources...</p>
            </div>

            <div className="about-our-approach we-do section-header text-center section-bg-color">
                <h2 className="about-our-approach-head heading-font-size">Our Approach</h2>
                <p className="about-our-approach-head1 home-aboutus-website-head">
                    Environmental Stewardship
                </p>
                <p className="about-our-approach-content">We believe in engineering solutions that not only meet the demands of today but also safeguard the world for future generations. Our team is dedicated to integrating environmentally friendly practices into every aspect of our projects. From utilizing <span className="home-heighlight">renewable energy sources</span> to designing <span className="home-heighlight">energy-efficient systems</span>, we strive to minimize our environmental footprint.</p>
            </div>

            <section className='about-history section-header text-center we-do'>
                <h2 className="about-our-approach-head heading-font-size about-section-history">Our History</h2>
                <div className="left-part">Hands on experience in domestic & industrial electrical work since 1996.
                </div>
                <div className="right-part">Working as a professional instructor and a trainer at Current Care Classes, Pune since 2015.
                </div>
                <div className="left-part">We have provided training to wiremen & electrical supervisors (over 200 employees of Reliance Energy, Mumbai).
                </div>
                <div className="right-part">We schedule training programs and provide guidelines on electrical safety in schools to the students from 3rd to 10th standard.
                </div>
                <div className="left-part">We have expertise in providing guest lectures that include showing the practical demos for site workers & engineers in construction line for their better understanding.
                </div>
                <div className="right-part">We conduct free seminars for wiremen & electrical supervisors by making them available the necessary information and material about the examination.

                </div>
                <div className="left-part">We take pride in mentioning that we are in good conversations and we share cordial professional relationship with the contractors and the personnel of Business, Energy and Electrical Dept. (who conduct the wiremen & electrical supervisors' exams in the month of November and May every year and issue the requisite license.)
                </div>
                <div className="right-part">We also provide guidance emphasising the importance of holding the license for the best careers and bright future in this field.</div>
            </section>

            <div className="about-our-approach we-do section-header text-center section-bg-color ">
                <h2 className="about-our-approach-head heading-font-size">Certificates</h2>
                <p className="about-our-approach-head1 home-aboutus-website-head">
                    {certArr[index].text}
                </p>
                <div className='position-relative'>
                    <div className='postion-absolute left-arrow' onClick={handleLeft}><i class="fa-solid fa-backward fa-2xl" style={{ color: '#161466' }}></i></div>
                    <img src={certArr[index].image} alt={certArr[index].text} className='image-good-one' />
                    <div className='postion-absolute right-arrow' onClick={handleRight}><i class="fa-solid fa-forward fa-2xl" style={{ color: '#161466' }}></i></div>
                </div>
            </div>
        </div >
    )
}

export default About