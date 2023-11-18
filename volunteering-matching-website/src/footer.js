import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="social text-left">
                        <ul>
                            <li>
                                <a href="#" className="icon-link">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon-link">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon-link">
                                    <FaTwitter />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="text-center rights-text">
                        Contact Us
                    </p>

                    <div className="text-right">
                        <h2>Start Volunteering Today!</h2>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Footer