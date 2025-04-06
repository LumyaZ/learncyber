import React from 'react';
import './WorkWithUs.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const WorkWithUs = () => {
  const testimonials = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://via.placeholder.com/150',
      quote: 'Notre collaboration avec LearnCyber a transformé notre approche de la sécurité. Leurs formations sur mesure ont permis à nos équipes de développer des compétences essentielles pour protéger notre infrastructure.',
      industry: 'Technologie'
    },
    {
      id: 2,
      name: 'SecureBank',
      logo: 'https://via.placeholder.com/150',
      quote: 'La qualité des formations et l\'expertise des formateurs ont dépassé nos attentes. Nous avons pu renforcer significativement notre posture de sécurité grâce à ce partenariat.',
      industry: 'Finance'
    },
    {
      id: 3,
      name: 'DataSecure',
      logo: 'https://via.placeholder.com/150',
      quote: 'Un partenaire de confiance qui comprend parfaitement nos besoins en matière de cybersécurité. Leurs solutions personnalisées ont fait toute la différence dans notre stratégie de sécurité.',
      industry: 'Sécurité des données'
    }
  ];

  return (
    <section id="work-with-us" className="work-with-us">
      <h2 className="work-with-us__title">Ils travaillent avec nous</h2>
      
      <div className="work-with-us__container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="work-with-us__card">
                <div className="work-with-us__logo">
                  <img src={testimonial.logo} alt={testimonial.name} />
                </div>
                <div className="work-with-us__content">
                  <p className="work-with-us__quote">"{testimonial.quote}"</p>
                  <div className="work-with-us__info">
                    <h4 className="work-with-us__name">{testimonial.name}</h4>
                    <p className="work-with-us__industry">{testimonial.industry}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkWithUs; 