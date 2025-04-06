import React, { useState, useEffect, useRef } from 'react';
import './History.scss';

const History = () => {
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

  const timeline = [
    {
      id: 1,
      year: '2020',
      title: 'Création du Projet',
      description: 'Lancement de notre initiative pour démocratiser l\'apprentissage de la cybersécurité.',
      position: 'left'
    },
    {
      id: 2,
      year: '2021',
      title: 'Développement de la Plateforme',
      description: 'Mise en place de notre plateforme d\'apprentissage interactive et de nos premiers modules.',
      position: 'right'
    },
    {
      id: 3,
      year: '2022',
      title: 'Expansion du Contenu',
      description: 'Ajout de nouveaux modules et partenariats avec des experts du domaine.',
      position: 'left'
    },
    {
      id: 4,
      year: '2023',
      title: 'Certification Reconnue',
      description: 'Obtention de certifications officielles et reconnaissance par l\'industrie.',
      position: 'right'
    },
    {
      id: 5,
      year: '2024',
      title: 'Innovation Continue',
      description: 'Introduction de nouvelles technologies et méthodes d\'apprentissage avancées.',
      position: 'left'
    }
  ];

  return (
    <section id="history" className={`history ${isVisible ? 'is-visible' : hasBeenVisible ? 'is-hidden' : ''}`} ref={sectionRef}>
      <h2 className="history__title">Notre Histoire</h2>
      
      <div className="history__container">
        <div className="history__timeline">
          {timeline.map((item) => (
            <div key={item.id} className={`history__item history__item--${item.position}`}>
              <div className="history__dot"></div>
              <div className="history__card">
                <span className="history__year">{item.year}</span>
                <h3 className="history__card-title">{item.title}</h3>
                <p className="history__card-description">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="history__line"></div>
        </div>
      </div>
    </section>
  );
};

export default History; 