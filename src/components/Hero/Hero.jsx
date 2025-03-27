import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import heroImage from '../../assets/images/heroImage.jpg';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="accueil" className="hero" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">Resume en une phrase votre objectif pour vos clients </h1>
        <p className="hero__subtitle">Resume en une phrase ce que vous etes simplement</p>
        <a href="#agence" className="hero__cta">Découvre LearnCyber</a>
      </div>
    </section>
  );
};

export default Hero; 