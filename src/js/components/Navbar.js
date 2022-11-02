import React from 'react';
import { Link } from "react-router-dom";
import '../../scss/components/Navbar.scss'
import Logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-justified align-items-center nav-desktop">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page"><img src={Logo} alt="Logo" className="logo" /></Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Profil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Réglage</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Communauté</Link>
                </li>
            </ul>
            <ul className="nav-mobile ">
                <nav className="navbar navbar-dark fixed-top">
                    <div className="container-fluid">
                        <Link to="/" className="nav-link navbar-brand" aria-current="page"><img src={Logo} alt="Logo" className="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <Link to="/" className="nav-link navbar-brand" aria-current="page"><img src={Logo} alt="Logo" className="logo" /></Link>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Accueil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Profil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Réglage</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Communauté</Link>
                                    </li>                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </ul>
        </div>
    )
}
 
export default Navbar;