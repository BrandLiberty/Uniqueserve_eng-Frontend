import React from 'react'
import '../assets/css/component/footer.css'
const Footer = () => {

	// Handle Whatsapp Integration
	const phoneNumber = '+919689251023'; // Replace with the desired phone number
	const message = 'Hello!'; // Optional message

	const handleWhatsAppClick = () => {
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
		window.location.href = whatsappLink;
	};

	// Handle call integration
	function handleCall() {
		const phoneNumber = '+919689251023'; // Replace with the phone number you want to call
		window.location.href = `tel:${phoneNumber}`;
	}

	return (
		<>
		<div class="hm-footer">
			<div class="container">
				<div class="hm-footer-details">
					<div class="row">
						<div class="col-md-4 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title ">
									<div class="logo" >

										<div class="hm-foot-title">
											<h4>Uniqueserve Engineering Pvt.Ltd﻿</h4>
										</div>
									</div>
								</div>
								<div class="hm-foot-para">
									<p>
										Ready to embark on a sustainable engineering journey with us?

										Contact Uniqueserve Engineering Pvt.Ltd﻿. today to explore how our expertise in electrical, electronic, mechanical, and civil engineering can align with your project goals while upholding the values of environmental sustainability, social responsibility, and governance excellence.
									</p>
								</div>
								<div class="hm-foot-icon">
									<ul>
										<li><a href="https://www.facebook.com/KishoreCoolkarni?mibextid=eHce3h"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										{/*<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
	<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>*/}
										<li><a href="https://www.instagram.com/kishore_coolkarni?igsh=MXE0NDl6dHlnb200aw=="><i class="fa-brands fa-square-instagram" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-2 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>Useful Links</h4>
								</div>
								<div class="footer-menu ">
									<ul class="">
										<li><a href="/home">Home</a></li>
										<li><a href="/about">About</a></li>
										<li><a href="/services">Services</a></li>
										<li><a href="/commitment-to-esg">Commitment to ESG</a></li>
										<li><a href="/activity">Community and Activities</a></li>
										<li><a href="/branch">Branches</a></li>
										<li><a href="/contact">Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6 col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4>Thank You</h4>
								</div>
								<div class="hm-para-news">
									<a>
										Thank you for considering
									</a>

								</div>
								<div class="footer-line">
									<div class="border-bottom"></div>
								</div>
								<div class="hm-para-news">
									<a>
										as your partner in engineering for a brighter, more sustainable future.
									</a>
									<span>Uniqueserve Engineering Pvt.Ltd﻿</span>
								</div>
							</div>
						</div>
						<div class=" col-md-3 col-sm-6  col-xs-12">
							<div class="hm-footer-widget">
								<div class="hm-foot-title">
									<h4> Head Office Address</h4>
								</div>
								<div class="hm-foot-para">
									<p class="para-news">
										Falt No. 10, Kaveri Apartment, Opp.City Pride Abhiruchi, Sinhgad Road, Pune 411041
									</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			</div>
			<div>
				{/* Whatsapp Integration */}
				<div className="wtsp-btn wp-hover-effect" onClick={handleWhatsAppClick}><i className="fa-brands fa-whatsapp wp-hover-effect"></i></div>

				{/*Call Integration*/}
				<div className="call-btn call-hover-effect" onClick={handleCall}><i className="fa-solid fa-phone call-hover-effect"></i></div>
			</div>
		</>
	)
}

export default Footer