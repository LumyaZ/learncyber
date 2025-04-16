import React from 'react';
import './Process.scss';

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Prise de contact',
    },
    {
      number: '2',
      title: 'Réunion cadrage',
    },
    {
      number: '3',
      title: 'Première sensibilisation',
    },
    {
      number: '4',
      title: 'Continuité via les modules',
    }
  ];

  return (
    <section id="process" className="process">
      <h2 className="process__title">Notre Process</h2>
      
      <div className="process__container">
        <div className="process__timeline">
          {steps.map((step, index) => (
            <div key={index} className="process__step">
              <div className="process__circle">
                <span className="process__number">{step.number}</span>
              </div>
              {index < steps.length - 1 && <div className="process__line" />}
              <div className="process__info">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 