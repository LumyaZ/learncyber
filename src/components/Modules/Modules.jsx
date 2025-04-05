import React, { useState } from 'react';
import './Modules.scss';
import moduleIntroduction from '../../assets/images/modules/introduction.png';

const Modules = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 1,
      title: 'Introduction à la Cybersécurité',
      description: 'Découvrez les fondamentaux de la cybersécurité et les enjeux actuels du numérique.',
      content: 'Ce module vous permettra de comprendre les bases de la sécurité informatique, les différentes menaces existantes et les bonnes pratiques à adopter pour protéger vos données et systèmes.',
      image: moduleIntroduction,
      status: 'Disponible'
    },
    {
      id: 2,
      title: 'Sécurité des Réseaux',
      description: 'Apprenez à sécuriser vos réseaux et à détecter les intrusions.',
      content: 'Plongez dans les protocoles de sécurité réseau, la configuration des pare-feu, et la détection d\'intrusion pour protéger efficacement votre infrastructure.',
      image: moduleIntroduction,
      status: 'Disponible'
    },
    {
      id: 3,
      title: 'Protection des Données',
      description: 'Maîtrisez les techniques de protection des données sensibles.',
      content: 'Découvrez les méthodes de chiffrement, la gestion des accès, et les réglementations en vigueur pour assurer la confidentialité de vos données.',
      image: moduleIntroduction,
      status: 'Bientôt'
    },
    {
      id: 4,
      title: 'Réponse aux Incidents',
      description: 'Gérez efficacement les incidents de sécurité.',
      content: 'Apprenez à réagir face aux incidents de sécurité, à mettre en place des procédures de réponse et à minimiser l\'impact des attaques.',
      image: moduleIntroduction,
      status: 'Bientôt'
    }
  ];

  return (
    <section id="modules" className="modules">
      <h2 className="modules__title">Nos Modules</h2>
      
      <div className="modules__container">
        <div className="modules__nav">
          {modules.map((module, index) => (
            <button
              key={module.id}
              className={`modules__nav-button ${activeModule === index ? 'active' : ''}`}
              onClick={() => setActiveModule(index)}
            >
              <span className="modules__nav-title">{module.title}</span>
              <span className="modules__nav-status">{module.status}</span>
            </button>
          ))}
        </div>

        <div className="modules__content">
          <div className="modules__card">
            <div className="modules__card-image">
              <img src={modules[activeModule].image} alt={modules[activeModule].title} />
            </div>
            <div className="modules__card-content">
              <h3 className="modules__card-title">{modules[activeModule].title}</h3>
              <p className="modules__card-description">{modules[activeModule].description}</p>
              <div className="modules__card-details">
                <p>{modules[activeModule].content}</p>
                <span className="modules__card-status">{modules[activeModule].status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules; 