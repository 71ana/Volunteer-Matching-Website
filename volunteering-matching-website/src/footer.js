import React from "react";
import "./footer.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>

                    <section className="page">
                        <h2>Countries</h2>
                        <ul className="category-list">
                            <li>South Africa</li>
                            <li>Ukraine</li>
                            <li>Palestine</li>
                            <li>Israel</li>
                            <a href='#'>See more...</a>
                        </ul>
                    </section>

                    <div className='about'>
                        <div className='logo'>
                            <img src='' alt='logo'></img>
                        </div>
                        <div className='detail'>
                            <p>Connect with us to make a difference! Explore rewarding volunteer opportunities, learn more about our mission, and stay updated on social media!</p>
                            <div className='icon'>
                                <li><RiFacebookFill /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>
                    </div>

                    <div className='page'>
                        <h3>Contact Us!</h3>
                        <ul>
                            <li>+40723719139, flavia.stegaru@student.upt.ro</li>
                            <li>+40757571884, oana.spatacean@student.upt.ro</li>
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer