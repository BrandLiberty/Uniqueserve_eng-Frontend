import React from 'react'
import '../../assets/css/component/contact.css'
import ContactComp from '../../atoms/contactComponent'
const Contact = () => {
    return (
        <>
            <div class="about-part contact-part">
                <div class="container">
                    <div className="about-part-details 
                esg-part-details text-center">
                        <h2>contact us</h2>
                        <div className="about-part-content">
                            <div className="breadcrumbs">
                                <div className="container">
                                    <ol className="breadcrumb">
                                        <li><a href="/home" style={{ color: 'white' }}>home</a><span style={{ color: 'white' }}>//</span></li>
                                        <li><a href="/contact" style={{ color: 'white' }}>contact</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ContactComp />

        </>
    )
}

export default Contact