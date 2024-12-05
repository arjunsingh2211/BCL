import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const styles = {
        navItems: {
            fontFamily: "'Satoshi', sans-serif",
            fontSize: '21px',
        },
    };

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid" style={styles.navItems}>
                        <Link className="navbar-brand" to="/"><img className='img-fluid' style={{width: '200px', height: '130'}} src="/images/BCL-logo.jpeg" alt="" /></Link>
                        <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item ms-lg-4">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <Link className="nav-link" to="/career">Careers</Link>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
