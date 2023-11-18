import React from 'react';
import './contact.css';
import {RiFacebookFill} from "react-icons/ri";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {BsYoutube} from "react-icons/bs";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='box'>
                    <h2>Contact Us</h2>
                    <p className='space' />

                    <div className='step' id="contact-info">
                        <h3>Contact Information</h3>
                        <p className='bold'>We welcome your inquiries, feedback, and suggestions. Feel free to get in touch with us using the contact details provided below:</p>
                        <p>Address: United Business Center 0,
                            Piața Consiliul Europei 2D, Timișoara 300627
                        </p>
                        <p>Phone: 0357372123</p>
                        <p>Email: unityuplift@unity.com</p>
                    </div>



                    {/* Social Media Links */}
                    <div className='step' id="social-media">
                        <h3>Connect With Us</h3>
                        <p className='bold'>Stay updated and engaged with us through our social media channels:</p>
                        <p className='space'/>
                        <div className='icon'>
                            <li><RiFacebookFill /></li>
                            <li><AiOutlineInstagram /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><BsYoutube /></li>
                        </div>
                    </div>

                    {/* Map (if applicable) */}
                    <div className='step' id="map">
                        <h3>Our Location</h3>
                        <p className='space'/>
                        <p className='bold'> Visit us in person! Find our location on the map below:</p>

                        <img src='./img/map.jpg' />
                    </div>

                    <p className='space' />

                </div>
            </div>
        </div>
    );
};

export default Contact;
