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
      year: 'Novembre 2022',
      title: 'Lancement de CyberSafe',
      description: "A l'origine nous voulions créer un média de cybersécurité, avec des cours, des exercices, des interviews, des tutoriels, etc. Mais le projet était trop ambitieux et en voulant cibler le plus de personnes possibles, nous ne touchions pas grand monde. La partie sensibilisation était une hypothèse que nous avons fini par développé par la suite",
      position: 'left'
    },
    {
      id: 2,
      year: 'Septembre 2023',
      title: 'LearnCyber change de cap',
      description: "Lancement de notre projet de sensibilisation à la cybersécurité. Élaboration de différents modules, structuration de la refonte du projet et premiers rendez-vous dans des écoles : Lycée la Salle de Lille ! Le Lycée nous a permis de faire des sessions de tests sur les étudiants en les sensibilisant à la cybersécurité. Nous avons même sensibilisé le corps enseignant et administratif du lycée ",
      position: 'right'
    },
    {
      id: 3,
      year: 'Juin 2024',
      title: 'Grand gagnant du Ydays Event à Lyon',
      description: "Né au sein du campus Ynov de Lille, notre école organise tous les ans un concours inter-campus sur l'entreprenariat. Nous nous sommes déplacés à la Banque de France pour parler de notre projet et de nos résultats : près de 600 élèves sensibilisés en 4 mois. Nous avons remporté le premier prix et obtenu une dotation de 7000€ pour le lancement officiel de notre projet.",
      position: 'left'
    },
    {
      id: 4,
      year: 'septembre 2024',
      title: 'Ouverture de notre association',
      description: "Depuis septembre 2024, nous avons ouvert notre association à but non lucrative et continué d'intervenir au Lycée la Salle de Lille. Maintenant nous intervenons dans d'autres établissements et montrons notre activité sur les réseaux sociaux (lien linkedin). Notre projet prend de plus en plus d'ampleur et les retours sont plus que positifs ! Nous sommes entrain de nous professionnaliser, nouvelle direction artistique, nouveaux matériels, nouveaux outils, ...",
      position: 'right'
    },
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