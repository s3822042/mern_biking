import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

function Index() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <Link to="/about">
                            Biking
                        </Link>
                    </div>
                </div>
                <div className="navbar__center">
                    <ul className="navbar__list--items">
                        <li className="navbar__list--item">Home</li>
                        <li className="navbar__list--item">About</li>
                        <li className="navbar__list--item">Contact</li>
                    </ul>
                </div>
                <div className="navbar__right"></div>
            </div>
        </div>
    )
}

export default Index;

