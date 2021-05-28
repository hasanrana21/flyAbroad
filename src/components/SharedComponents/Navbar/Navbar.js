import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light me-3 ms-3 mt-md-3">
            <div className="container-fluid">
                <Link to="/" className="fontFamily main-text fs-3 mainLogo logo link">fly<span style={{color: 'black'}}>Abroad</span></Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link nav-text nav-item me-4 link">
                            Home
                        </Link>
                        <Link to="/about" className="nav-link nav-text nav-item me-4 link">
                            Air
                        </Link>
                        <Link to="/portfolio" className="nav-link nav-text nav-item me-4 link">
                            Accommodation
                        </Link>
                        <Link to="/blog" className="nav-link nav-text nav-item me-4 link">
                            Client Satisfaction
                        </Link>
                        <Link to="/contact" className="nav-link nav-text  nav-item me-4 link">
                            Contact US
                        </Link>
                    </ul>
                    <a className="userImg" href=""></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;