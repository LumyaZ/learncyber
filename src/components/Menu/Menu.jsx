import React, { useState, useEffect } from 'react';
import './Menu.scss';
import logo from '../../assets/images/Logo.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('accueil');
      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        setScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const headerOffset = document.querySelector('.menu').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`menu ${scrolled ? 'menu--scrolled' : ''}`}>
      <div className="menu__logo">
          <img src={logo} alt="Logo" />
      </div>
      
      <button 
        className={`menu__toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu__overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      <ul className={`menu__items ${isOpen ? 'open' : ''}`}>
        <li><a href="#accueil" onClick={(e) => handleLinkClick(e, 'accueil')}>Accueil</a></li>
        <li><a href="#agence" onClick={(e) => handleLinkClick(e, 'agence')}>Agence</a></li>
        <li><a href="#modules" onClick={(e) => handleLinkClick(e, 'modules')}>Modules</a></li>
        <li><a href="#timeline-component" onClick={(e) => handleLinkClick(e, 'timeline-component')}>Historique</a></li>
        <li><a href="#team" onClick={(e) => handleLinkClick(e, 'team')}>Notre Team</a></li>
        <li><a href="#process" onClick={(e) => handleLinkClick(e, 'process')}>Process</a></li>
        <li><a href="#realisation" onClick={(e) => handleLinkClick(e, 'realisation')}>Réalisation</a></li>
        <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu; 