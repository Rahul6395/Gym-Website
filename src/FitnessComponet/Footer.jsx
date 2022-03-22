import React from 'react';
import "./Footer.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className='footerCon'>
                <div className='footerChield'>
                    <div className='footerAbout'>
                        <h1 className="FooterHeading">ABOUT</h1>
                        <p className='footerPgh'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab</p>
                        <div className="footerSocialIconsCon"></div>
                        <span className="footerSocialIcons"><FaFacebookF/></span>
                        <span className="footerSocialIcons"><FaTwitter/></span>
                        <span className="footerSocialIcons"><FaInstagram/></span>
                        <span className="footerSocialIcons"><FaYoutube/></span>
                    </div>
                    <div className='footerAbout'>
                        <h1 className="FooterHeading">HELP&SUPPORT</h1>
                        <div className='footerHelp'>
                           <h4 className='footerNav'>Live Chat</h4>
                           <h4 className='footerNav'>Faq</h4>
                           <h4 className='footerNav'>Support</h4>
                           <h4 className='footerNav'>Term & Service</h4>
                        </div>
                    </div>

                    <div className='footerAbout footerContact'>
                        <h1 className="FooterHeading">CONTACT</h1>
                        <div className='footerLinks'>
                            <a href="mailto.com"> <FiMail className='footerIcon' /> TFitness.com</a>
                        </div>
                        <div className='footerLinks'>
                            <a href="tel:+44-000-888-999"> <FiPhone className='footerIcon' /> +44-000-888-999</a>
                        </div>
                        <div className='footerLinks'>
                            <span className="footerMap"> <FiMapPin className='footerIcon' /> Haryana ,Faridabad 121005</span>
                        </div>
                    </div>
                </div>
                <div className='footerLast'>
                    <p className='footerPgh'>© 2019 Apt Pro. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
