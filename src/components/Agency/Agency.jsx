import React from 'react';
import './Agency.scss';

const Agency = () => {
  return (
    <section id="agence" className="agency">
      <div className="agency__content">
        <div className="agency__text">
          <h2 className="agency__title">LearnCyber</h2>
          <p className="agency__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#process" className="agency__cta">Découvrir notre process</a>
        </div>
      </div>
    </section>
  );
};

export default Agency; 