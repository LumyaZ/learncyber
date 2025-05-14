import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Realisations.scss';

const Realisations = () => {
  const [activePeriod, setActivePeriod] = useState('2023-2024');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenPanel = (project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const periods = {
    '2023-2024': [
      {
        id: 1,
        title: 'Sensibilisation des élèves du lycée la salle Lille',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
        images: ['/images/realisations/projet1_1.jpg', '/images/realisations/projet1_2.jpg', '/images/realisations/projet1_3.jpg'],
        technologies: [''],
        link: '#'
      },
      {
        id: 2,
        title: 'Sensibilisation du corps enseignant',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        images: ['/images/realisations/projet2_1.jpg', '/images/realisations/projet2_2.jpg'],
        technologies: [''],
        link: '#'
      },
      {
        id: 3,
        title: 'Sensibilisation du personnel administratif',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        images: ['/images/realisations/projet3_1.jpg', '/images/realisations/projet3_2.jpg', '/images/realisations/projet3_3.jpg'],
        technologies: [''],
        link: '#'
      }
    ],
    '2024-2025': [
      {
        id: 4,
        title: 'Sensibilisation spécifique dans une formation OVT au Lycée Vertes Feuilles',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        images: ['/images/realisations/projet4_1.jpg', '/images/realisations/projet4_2.jpg'],
        technologies: [''],
        link: '#'
      },
      {
        id: 5,
        title: 'Conférence sur les enjeux de cybersécurité dans le milieu de l\'Optique à l\'EOL',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        images: ['/images/realisations/projet5_1.jpg', '/images/realisations/projet5_2.jpg', '/images/realisations/projet5_3.jpg'],
        technologies: [''],
        link: '#'
      },
      {
        id: 6,
        title: 'Sensibilisation des étudiants à Lille Ynov Campus',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
        images: ['/images/realisations/projet6_1.jpg', '/images/realisations/projet6_2.jpg'],
        technologies: [''],
        link: '#'
      }
    ]
  };

  return (
    <section id="realisation" className="realisations">
      <h2 className="realisations__title">Nos Réalisations</h2>
      
      <div className="realisations__tabs">
        <button 
          className={`realisations__tab ${activePeriod === '2023-2024' ? 'active' : ''}`}
          onClick={() => setActivePeriod('2023-2024')}
        >
          2023 - 2024
        </button>
        <button 
          className={`realisations__tab ${activePeriod === '2024-2025' ? 'active' : ''}`}
          onClick={() => setActivePeriod('2024-2025')}
        >
          2024 - 2025
        </button>
      </div>
      
      <div className="realisations__container">
        <div className="realisations__grid">
          {periods[activePeriod].map((project) => (
            <div key={project.id} className="realisations__card">
              <div className="realisations__image">
                <img src={project.images[0]} alt={project.title} />
              </div>
              <div className="realisations__content">
                <h3 className="realisations__project-title">{project.title}</h3>
                <p className="realisations__description">{project.description.substring(0, 100)}...</p>
                <div className="realisations__technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="realisations__tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && <span className="realisations__tech-tag">...</span>}
                </div>
                <button onClick={() => handleOpenPanel(project)} className="realisations__details-button">
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`realisations__panel-overlay ${isPanelOpen ? 'open' : ''}`} onClick={handleClosePanel}></div>
      <div className={`realisations__panel ${isPanelOpen ? 'open' : ''}`}>
        {selectedProject && (
          <>
            <button className="realisations__panel-close" onClick={handleClosePanel}>&times;</button>
            <div className="realisations__panel-slider">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} ${index + 1}`} 
                      className="realisations__panel-img" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="realisations__panel-content">
              <h3 className="realisations__panel-title">{selectedProject.title}</h3>
              <p className="realisations__panel-description">{selectedProject.description}</p>
              <h4>Technologies utilisées :</h4>
              <div className="realisations__panel-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="realisations__tech-tag">{tech}</span>
                ))}
              </div>
              <a href={selectedProject.link} className="realisations__panel-link" target="_blank" rel="noopener noreferrer">
                Voir le projet (si applicable)
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Realisations;
