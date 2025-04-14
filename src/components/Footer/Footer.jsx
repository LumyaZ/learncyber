import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/Logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer__content">
                <div className="footer__socials">
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer__links">
                    <ul>
                        <li><a href="#agence" >Agence</a></li>
                        <li><a href="#modules">Modules</a></li>
                        <li><a href="#history">Historique</a></li>
                        <li><a href="#team" >Notre Team</a></li>
                        <li><a href="#process" >Process</a></li>
                        <li><a href="#realisation" >Réalisation</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <ul>
                        <li>Adresse: 123 Rue Exemple, Ville, Pays</li>
                        <li>Téléphone: +123 456 7890</li>
                        <li>Email: contact@exemple.com</li>
                    </ul>
                </div>
                <div className="footer__legal">
                    <ul>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Conditions d'utilisation</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;