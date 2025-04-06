import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const companies = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://via.placeholder.com/150',
      hasLogo: true
    },
    {
      id: 2,
      name: 'SecureBank',
      logo: 'https://via.placeholder.com/150',
      hasLogo: true
    },
    {
      id: 3,
      name: 'DataSecure',
      logo: 'https://via.placeholder.com/150',
      hasLogo: true
    },
    {
      id: 4,
      name: 'CyberTech Solutions',
      hasLogo: false
    },
    {
      id: 5,
      name: 'NetGuard',
      logo: 'https://via.placeholder.com/150',
      hasLogo: true
    },
    {
      id: 6,
      name: 'Digital Shield',
      hasLogo: false
    },
    {
      id: 7,
      name: 'SecureNet',
      logo: 'https://via.placeholder.com/150',
      hasLogo: true
    },
    {
      id: 8,
      name: 'TechGuard',
      hasLogo: false
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="testimonials__title">Ils nous font confiance</h2>
      
      <div className="testimonials__container">
        <div className="testimonials__scroller">
          <div className="testimonials__track">
            {companies.map((company) => (
              <div key={company.id} className="testimonials__circle">
                {company.hasLogo ? (
                  <img src={company.logo} alt={company.name} className="testimonials__logo" />
                ) : (
                  <span className="testimonials__name">{company.name}</span>
                )}
              </div>
            ))}
            {/* Duplicate items for infinite scroll effect */}
            {companies.map((company) => (
              <div key={`${company.id}-duplicate`} className="testimonials__circle">
                {company.hasLogo ? (
                  <img src={company.logo} alt={company.name} className="testimonials__logo" />
                ) : (
                  <span className="testimonials__name">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 