import React, { useState } from 'react'
import { FETCH } from '../../container/services/Fetch.tsx';


const ContactComp = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log('Form submitted:', formData);

        try {
            let { data, status } = await FETCH(
                'post',
                '/contact-request',
                '',
                formData
            )
            alert(data.message)
        } catch (error) {
            //console.log('ERROR ', error)
            alert('CHeck Your Internet COnnection')
        }

    };



    return (
        <div class="contact">
            <div class="container">
                <div class="contact-details">
                    <div class="section-header contact-head  text-center">
                        <h2>contact us</h2>
                        <p>
                            Ready to embark on a sustainable engineering journey with us?

                            Contact <span >Uniqueserve Engineering Pvt.Ltd﻿.</span> today to explore how our expertise in electrical, electronic, mechanical, and civil engineering can align with your project goals while upholding the values of  <span >environmental sustainability, social responsibility, and governance excellence.</span></p>
                    </div>
                    <div class="contact-content">
                        <div class="row">
                            <div class="col-sm-offset-1 col-sm-5">
                                <div class="single-contact-box">
                                    <div class="contact-right">
                                        <div class="contact-adress">
                                            <div class="contact-office-address">
                                                <h3 style={{ marginBottom: `20px` }}>contact info</h3>

                                                <div class="contact-online-address">
                                                    <div class="single-online-address">
                                                        <i class="fa fa-phone"></i>
                                                        9689251023
                                                    </div>
                                                    <div class="single-online-address">
                                                        <i class="fa fa-envelope-o"></i>
                                                        <span>uniqueserve25@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="contact-office-address">
                                                <h3>social partner</h3>
                                                <div class="contact-icon">
                                                    <ul>
                                                        <li><a href="https://www.facebook.com/profile.php?id=100069361430747"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        {/*<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>*/}
                                                        <li><a href="https://www.instagram.com/uniqueserve.engineering?igsh=MTAzNHFjbnlydnZlMw=="><i class="fa-brands fa-square-instagram" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="single-contact-box">
                                    <div class="contact-form">
                                        <h3>Leave us a Massage Here</h3>
                                        <form>
                                            <div class="row">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="firstname"
                                                            placeholder="First Name"
                                                            name="firstname"
                                                            value={formData.firstname}
                                                            onChange={handleChange}
                                                            required />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <input type="text"
                                                            class="form-control"
                                                            id="lastname"
                                                            placeholder="Last Name"
                                                            value={formData.lastname}
                                                            onChange={handleChange}
                                                            name="lastname" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <input type="email"
                                                            class="form-control"
                                                            id="email"
                                                            placeholder="Email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            name="email" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <input type="text"
                                                            class="form-control"
                                                            id="phone"
                                                            placeholder="Phone"
                                                            value={formData.contactNumber}
                                                            onChange={handleChange}
                                                            name="contactNumber" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control"
                                                         rows="7"
                                                          id="comment"
                                                           placeholder="Message"
                                                           value={formData.message}
                                                            onChange={handleChange} 
                                                            name = "message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="single-contact-btn" style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <button class="contact-btn" type="button" onClick={handleSubmit}>send message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactComp