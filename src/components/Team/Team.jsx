import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Team.scss';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aminata',
      role: 'Graphiste et chef de projet',
      objectPosition: 'center 0%'
    },
    {
      id: 2,
      name: 'Alexis',
      role: 'Commercial'
    },
    {
      id: 3,
      name: 'Antoine',
      role: 'Commercial',
      objectPosition: 'center 30%'
    },
    {
      id: 4,
      name: 'Axel',
      role: 'Responsable audiovisuel',
      objectPosition: 'center 30%'
    },
    {
      id: 5,
      name: 'Jean françois',
      role: 'Community manager'
    },
    {
      id: 6,
      name: 'Jules',
      role: 'Community manager'
    },
    {
      id: 7,
      name: 'Marie',
      role: 'Designer'
    },
    {
      id: 8,
      name: 'Pierre',
      role: 'Développeur'
    },
    {
      id: 9,
      name: 'Sophie',
      role: 'Marketing'
    },
    {
      id: 10,
      name: 'Yasser',
      role: 'Connard'
    }
  ];

  return (
    <section id="team" className="team-component">
      <h2 className="team-component__title">Notre Team</h2>
      <p className="team-component__subtitle">
        Découvrez les talents qui composent notre équipe passionnée.
      </p>
      
      <div className="team-component__slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            }
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={member.id}>
              <div className={`team-component__member ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                <div className="team-component__image">
                  <div className="team-component__placeholder">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="team-component__info">
                  <h3 className="team-component__name">{member.name}</h3>
                  <p className="team-component__role">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team; 