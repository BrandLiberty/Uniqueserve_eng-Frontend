import React from 'react'
import '../../assets/css/component/esg.css'
import esg from '../../assets/images/esg/esg.jpg'
const Esg = () => {
    return (
        <>
            <section className="about-part esg-part">
                <div className="container">
                    <div className="about-part-details 
                    esg-part-details text-center">
                        <h2>Commitment To ESG</h2>
                        <div className="about-part-content">
                            <div className="breadcrumbs">
                                <div className="container">
                                    <ol className="breadcrumb">
                                        <li><a href="/home" style={{ color: 'white' }}>home</a><span style={{ color: 'white' }}>//</span></li>
                                        <li><a href="/commitment-to-esg" style={{ color: 'white' }}>Commitment To ESG</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className="home-about-us we-do section-header text-center ">

                <div className="esg-head heading-font-size background-clip">
                    Environmental, Social, and Governance
                </div>
                <p className="home-web-description" style={{ padding: 5 }}>

                    <span className="home-heighlight"> Uniqueserve Engineering Pvt.Ltd .</span>

                    is committed to upholding the principles of Environmental, Social, and Governance (ESG) in every facet of our operations. We understand that our actions today shape the world tomorrow. By integrating ESG factors into our projects,

                    <span className="home-heighlight"> we strive to make a positive impact on the environment, society, and governance landscape.</span>

                </p>
                <div className="esg-img">
                    <img src={esg} alt="" />
                </div>
                <p style={{ padding: 5 }}>
                    Whether it's designing infrastructure with a minimal carbon footprint, fostering inclusive workplaces, or maintaining the highest standards of corporate governance, <span className="home-heighlight"> Uniqueserve Engineering Pvt.Ltd.</span> is dedicated to driving <span className="home-heighlight"> sustainable engineering solutions that contribute to a better world.</span>
                </p>
            </section>

        </>
    )
}

export default Esg