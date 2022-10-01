import React from 'react';
import '../../scss/components/Navbar.scss'
import Logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-justified align-items-center">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#"><img src={Logo} alt="Logo" className="logo" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Accueil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Réglage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Communauté</a>
                </li>
            </ul>
        </div>
    )
}
 
export default Navbar;