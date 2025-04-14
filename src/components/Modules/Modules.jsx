import React, { useState, useEffect, useRef } from 'react';
import './Modules.scss';

const Modules = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else if (hasBeenVisible) {
          // Si l'élément a déjà été visible mais ne l'est plus
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [hasBeenVisible]);

  const modules = [
    {
      id: 0,
      title: 'Introduction',
      description: 'Les bases de la cybersécurité',
      content: 'Découvrez les fondamentaux de la cybersécurité, les différentes menaces et les bonnes pratiques de sécurité.',
      image: '/images/modules/intro.jpg',
      status: 'Disponible'
    },
    {
      id: 1,
      title: 'Réseaux',
      description: 'Sécurité des réseaux',
      content: 'Apprenez à sécuriser vos réseaux, à détecter les intrusions et à mettre en place des protections efficaces.',
      image: '/images/modules/network.jpg',
      status: 'Disponible'
    },
    {
      id: 2,
      title: 'Applications',
      description: 'Sécurité des applications',
      content: 'Maîtrisez la sécurisation des applications web et mobiles, identifiez les vulnérabilités courantes.',
      image: '/images/modules/apps.jpg',
      status: 'Bientôt'
    },
    {
      id: 3,
      title: 'Données',
      description: 'Protection des données',
      content: 'Protégez vos données sensibles, appliquez le chiffrement et gérez les sauvegardes de manière sécurisée.',
      image: '/images/modules/data.jpg',
      status: 'Bientôt'
    }
  ];

  return (
    <section id="modules" className={`modules ${isVisible ? 'is-visible' : hasBeenVisible ? 'is-hidden' : ''}`} ref={sectionRef}>
      <h1 className="modules__title">MODULES</h1>
      <div className="modules__container">
        <nav className="modules__nav">
          {modules.map((module, index) => (
            <button
              key={module.id}
              className={`modules__nav-button ${activeModule === index ? 'active' : ''}`}
              onClick={() => setActiveModule(index)}
            >
              {module.title}
            </button>
          ))}
        </nav>

        <div className="modules__content">
          <div className="modules__card" key={`module-${activeModule}`}>
            <div className="modules__image">
              <img src={modules[activeModule].image} alt={modules[activeModule].title} />
            </div>
            <div className="modules__info">
              <h2 className="modules__card-title">{modules[activeModule].title}</h2>
              <h3 className="modules__card-subtitle">{modules[activeModule].description}</h3>
              <p className="modules__card-content">{modules[activeModule].content}</p>
              <div className="modules__status">
                <span className={`modules__status-badge ${modules[activeModule].status === 'Disponible' ? 'available' : 'coming'}`}>
                  {modules[activeModule].status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules; 