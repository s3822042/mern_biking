import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Cross as Hamburger} from 'hamburger-react';
import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split('/')[1];

    const [navOpen, setNavOpen] = useState(false);
    const [activeNav, setActiveNav] = useState(splitLocation);
    return (
        <>
            <div className="navbar">
                <Link to="/" className="navbar__logo">
                    <p>Biking</p>
                </Link>
                <div className="navbar__desktop">
                    <Link to="/services">Services</Link>
                    <Link
                        onClick={() => setActiveNav("about")}
                        className={activeNav === "about" ? "active" : ""}
                        to="/about"
                    >
                        About Us
                    </Link>
                    <Link to="/login">Sign In</Link>
                    <Link className="navbar__desktop__signupBtn" to="/signup">
                        Get Started
                    </Link>
                </div>
                <div className="navbar__mobile__toggle">
                    <Hamburger size={25} toggled={navOpen} toggle={setNavOpen}/>
                </div>
            </div>
            {navOpen && (
                <div className="navbar__mobile">
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Sign In</Link>
                    <Link to="/signup" className="signupBtn">
                        Get Started
                    </Link>
                </div>
            )}
        </>
    )
}

export default Navbar;

