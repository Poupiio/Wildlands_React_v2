import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/elephant_logo.png';
import style from '../modules/Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={style.logoContainer}>
                <NavLink to="/">
                    <img src={logo} alt="Logo Wildlands" />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <i class="fa-solid fa-house"></i>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/safaris">
                            <i class="fa-solid fa-truck-pickup"></i>
                            Safaris
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/wildlife">
                            <i class="fa-solid fa-paw"></i>
                            Faune
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">
                            <i class="fa-solid fa-image"></i>
                            Galerie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <i class="fa-solid fa-envelope"></i>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                        <i class="fa-solid fa-user"></i>
                            Connexion
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;