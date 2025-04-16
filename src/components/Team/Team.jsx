import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Team.scss';

import anthonyImage from '../../assets/images/team/anthony_scandella.jpg';
import thomasImage from '../../assets/images/team/thomas_thellier.jpg';
import adrienImage from '../../assets/images/team/adrien_moisset.jpg';
import quentinImage from '../../assets/images/team/quentin_fanchon.jpg';
import alexisImage from '../../assets/images/team/alexis_neri.jpg';


const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Anthony Scandella',
      role: 'Chef de projet et Président de LearnCyber Consultant et Sensibilisateur',
      image: anthonyImage,
      objectPosition: 'center 0%'
    },
    {
      id: 2,
      name: 'Thomas Thellier',
      image: thomasImage,
      role: 'Trésorier de LearnCyber Consultant et Sensibilisateur  '
    },
    {
      id: 3,
      name: 'Quentin Fanchon',
      image: quentinImage,
      role: 'Secrétaire de LearnCyber Consultant et Sensibilisateur  ',
      objectPosition: 'center 30%'
    },
    {
      id: 4,
      name: 'Alexis Neri',
      image: alexisImage,
      role: 'Secrétaire suppléant Consultant et Sensibilisateur',
      objectPosition: 'center 30%'
    },
    {
      id: 5,
      name: 'Adrien Moisset',
      image: adrienImage,
      role: 'Consultant et Sensibilisateur et responsable réseaux / communications '
    },
  ];

  return (
    <section id="team" className="team">
      <h2 className="team__title">Notre Team</h2>
      <div className="team__slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
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
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team__member">
                <div className="team__image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ objectPosition: member.objectPosition || 'center' }}
                  />
                </div>
                <div className="team__info">
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__role">{member.role}</p>
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