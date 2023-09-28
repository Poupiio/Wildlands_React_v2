import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../modules/Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to="/">Mentions Légales</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contactez-nous</NavLink>
                </li>
                <li>
                    <NavLink to="/feedback">Les avis de nos aventuriers</NavLink>
                </li>
                <li>
                    <NavLink to="https://www.tiktok.com/fr/"  target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-tiktok"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://www.instagram.com/?hl=fr"  target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-facebook-f"></i>
                    </NavLink>
                </li>
            </ul>
            <p>Copyright ©2023 Wildlands. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;