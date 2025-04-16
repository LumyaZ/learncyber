import React from 'react';
import './Agency.scss';

const Agency = () => {
  return (
    <section id="agence" className="agency">
      <div className="agency__content">
        <div className="agency__text">
          <h2 className="agency__title">LearnCyber</h2>
          <p className="agency__description">
          LearnCyber est à l'origine un projet étudiant lancé par 3 étudiants débutants en cybersécurité. Notre souhait était de lancer un média complet et 100 % françaisde la cybersécurité. Aujourd'hui LearnCyber c'est une association à but non lucrative qui vise à sensibiliser aux enjeux de la cybersécurité, en intervenant principalement en milieu scolaire. Nous sommes persuadés que sensibiliser les jeunes d'aujourd'hui, permettra de rendre le monde de demain plus sûr. 
          </p>
          <a href="#process" className="agency__cta">Découvrir notre process</a>
        </div>
      </div>
    </section>
  );
};

export default Agency; 