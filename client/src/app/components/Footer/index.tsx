import React from 'react';
import {FaInstagram, FaTwitter} from "react-icons/fa";
import './Footer.css';


function Footer() {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    };
    return (
        <div className="footer">
            <div className="container">
                <div className="subContainer">
                    <p className="support">
                        Please let us know about your feedbacks, questions or concerns to
                        ensure we continue to serve you well.
                    </p>
                    <div className="contact">
                        <p>paulluanvothanh@gmail.com</p>
                        <div className="icons">
                            <a href="https://twitter.com/luanvothanh__" target="_blank" rel="noreferrer"
                               className="twitter">
                                <FaTwitter/>
                            </a>
                            <a href="https://instagram.com/paulluanvothanh" target="_blank" rel="noreferrer"
                               className="instagram">
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
                <footer>Biking, &copy; {getYear()}</footer>
            </div>
        </div>
    )
}

export default Footer;