import React from 'react';
import Icon from '@mdi/react';
import { mdiEmailOpenMultipleOutline } from '@mdi/js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import footerLogo from '../../assets/images/seff_logo_transparent.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container-md'>
            <div className='row p-0'>
                <div className='col-12 p-0'>
                    <div className='footer-logo'>
                        <img src={footerLogo} className='w-100 h-100'/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                   <div className='footer-title'>
                      <h3 className='text-white text-uppercase'>software engineering for future</h3>
                   </div>
                   <div className='footer-nav d-md-block d-none'>
                       <div className='d-flex'>
                          <a href='#'>Home</a>
                          <a href='#'>About</a>
                          <a href='#'>Tech</a>
                          <a href='#'>Business</a>
                          <a href='#'>Security</a>
                       </div>
                       <div className='d-flex flex-wrap mt-2 '>
                          <a href='#'  className='mb-0'>Medical</a>
                          <a href='#'  className='mb-0'>Startups</a>
                          <a href='#'  className='mb-0'>Apps</a>
                          <a href='#'  className='mb-0'>Courses</a>
                          <a href='#'  className='mb-0'>Contact Us</a>
                          <a href='#'  className='mb-0'>Sports</a>
                       </div>
                   </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='footer-contact'>
                        <div className='email d-flex justify-content-md-end justify-content-start text-white'>
                            <p className='me-2 mt-1'>sefffuture@gmail.com</p>
                            <p><Icon path={mdiEmailOpenMultipleOutline} size={1} className='email-icon d-md-block d-none'/></p>
                        </div>
                        <div className='phone d-flex justify-content-md-end justify-content-start text-white'>
                            <p className='me-2'>+20 109 8481 288 <br/>+20 155 5177 645</p>
                            <p><FontAwesomeIcon icon={faPhoneVolume} className='phone-icon d-md-block d-none'/></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-last-sec mt-4 position-relative'>
                <div className='row mt-5'>
                    <div className='col-md-6 col-12 d-flex justify-content-md-start justify-content-center '>
                        <p className='copy-right text-white text-uppercase'>@2023 Egypt, All Rights Reserved</p>
                    </div>
                    <div className='col-6'>
                        <div className='footer-icons text-white d-flex flex-md-row flex-column justify-content-end'>
                            <FontAwesomeIcon icon={faFacebook}  className='social-icon'/>
                            <FontAwesomeIcon icon={faTwitter}   className='social-icon'/>
                            <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
                            <FontAwesomeIcon icon={faLinkedin}  className='social-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bg container-fluid d-md-none d-block'></div>
    </div>
  )
}
export default Footer;
