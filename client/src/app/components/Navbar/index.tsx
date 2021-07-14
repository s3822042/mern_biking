import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <Link to="/">Biking</Link>
                    </div>
                </div>
                <div className="navbar__center">
                    <ul className="navbar__list--items">
                        <li className="navbar__list--item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="navbar__list--item">
                            <Link to="/faq">FAQs</Link>
                        </li>
                        <li className="navbar__list--item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar__right">
                    <img className="navbar__avatar" src="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

