import React from 'react'
import '../../assets/css/component/service/service.css'
import civil from '../../assets/images/Photos/18.png'
import mechanical from '../../assets/images/Photos/17.png'
import electrical from '../../assets/images/Photos/15.png'
import electronic from '../../assets/images/Photos/16.png'
const Services = () => {
    return (
        <>

            <section class="about-part service-part">
                <div class="container">
                    <div class="about-part-details service-part-details text-center">
                        <h2>service</h2>
                        <div class="about-part-content">
                            <div class="breadcrumbs">
                                <div class="container">
                                    <ol class="breadcrumb">
                                        <li><a href="/home" style={{color:'white'}}>home</a><span style={{color:'white'}}>//</span></li>
                                        <li><a href="/service" style={{color:'white'}}>service</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="service">
                <div class="container">
                    <div class="service-details">
                        <div class="section-header text-center">
                            <div className='heading-font-size background-clip'>Services We Offer</div>
                            <p>
                                We will make a global change by finding alternatives to depleting energy sources..
                            </p>
                        </div>


                        <div className="servicepage-content">
                            <div className="servicepage-box servicepage-box-left servicepage-electrical">
                                <div className="servicepage-content service-txt">
                                    <h2>
                                        <a>Electrical Engineering</a>
                                    </h2>
                                    <p>
                                        Our electrical engineering services cover a wide spectrum, including power generation, distribution, and renewable energy solutions. We design systems that optimize energy usage and harness the power of sustainable resources.
                                    </p>
                                </div>
                                <div className="servicepage-img">
                                    <img src={electrical} alt="" className='servicepage-civil-img' />
                                </div>
                            </div>
                            <div className="servicepage-box    servicepage-box-right servicepage-electronic">
                                <div className="servicepage-content service-txt">
                                    <h2>
                                        <a href="#">Electronic Engineering</a>
                                    </h2>
                                    <p>
                                        From circuit design to embedded systems, our electronic engineering expertise encompasses creating efficient and innovative electronic solutions that drive technological advancements while considering their environmental and societal impacts.
                                    </p>
                                </div>
                                <div className="servicepage-img">
                                    <img src={electronic} alt="" className='service-civil-img' /></div>
                            </div>
                            <div className="servicepage-box  servicepage-box-left servicepage-mechanical">
                                <div className="servicepage-content service-txt">
                                    <h2>
                                        <a href="#">Mechanical Engineering</a>
                                    </h2>
                                    <p>
                                        In the realm of mechanical engineering, we excel in designing, analyzing, and optimizing mechanical systems. Our focus on sustainability ensures that our solutions are energy-efficient and eco-friendly.
                                    </p>
                                </div>
                                <div className="servicepage-img">
                                    <img src={mechanical} alt="" className='service-civil-img' /></div>
                            </div>
                            <div className="servicepage-box  servicepage-box-right 
                            servicepage-civil">
                                <div className="servicepage-content service-txt">
                                    <h2>
                                        <a href="#">Civil Engineering</a>
                                    </h2>
                                    <p>
                                        Our civil engineering solutions aim not only for structural integrity but also for eco-conscious designs. We undertake projects that prioritize sustainable materials, green infrastructure, and environmentally responsible construction practices.
                                    </p></div>
                                <div className="servicepage-img">
                                    <img src={civil} alt="" className='service-civil-img' /></div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Services