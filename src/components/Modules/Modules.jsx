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
      description: 'Introduction à la cybersécurité',
      content: "La cybersécurité est un mot qui peut faire peur, notre but à travers ce module est de faire prendre conscience que de simples actions peuvent vous sécuriser facilement. Cependant, il y a de plus en plus de cyberattaques et de conséquences sur les entreprises et les particuliers. C'est pourquoi nous rappelons les risques et conséquences de la négligence ou méconnaissance du public. Nous pouvons adapter notre contenu en fonction du domaine d'études ou du secteur d'activité pour sensibiliser de la meilleure des manières possibles.",
      image: '/images/modules/intro.jpg',
      status: 'Disponible'
    },
    {
      id: 1,
      title: 'Sensibilisation ',
      description: 'Sensibilisation au phishing ',
      content: "Le phishing (ou hameçonnage en français) est la cyberattaque la plus utilisée par les acteurs malveillants. Sa simplicité technique et son bas coût offre une arme de choix aux cybercriminels. Il faut savoir que 90 % des cyberattaques proviennent d'une attaque de phishing ! C'est pourquoi il est important de ne pas négliger sa messagerie professionnelle comme personnelle. Nous mettons en plus des mini-ateliers pour inclure les collaborateurs et leur permettre de pratiquer dans un environnement idéal.",
      image: '/images/modules/network.jpg',
      status: 'Disponible'
    },
    {
      id: 2,
      title: 'OSINT',
      description: '(Open Source Intelligence)',
      content: "L'OSINT (Open Source Intelligence) est une pratique connue en cybersécurité. Elle consiste à chercher des informations disponibles publiquement sur internet. Certaines entreprises ou recruteurs font appellent à des sociétés spécialisées dans cette pratique pour trouver des informations spécifiques. Dans ce module nous abordons le danger des réseaux sociaux et souhaitons montrer que toutes informations mise en ligne peut -être utilisée dans un but malveillant. Une mise en pratique des personnes sensibilisés sur un cas fictif, pour leur faire prendre conscience de la quantité d'informations personnelles et les liens qu'il est possible de faire à partir d'un simple nom, d'une adresse mail ou même d'une photo.",
      image: '/images/modules/apps.jpg',
      status: 'Disponible'
    },
    /*{
      id: 3,
      title: 'Conférence',
      description: 'Protection des données',
      content: 'LearnCyber a animé plusieurs conférences sur des sujets de cybersécurité.',
      image: '/images/modules/data.jpg',
      status: 'Bientôt'
    }*/
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