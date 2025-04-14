// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  useEffect(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('OMFrf84GFrC1C7-BT');
  }, []);

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'service_ku8nqib',
        'template_y7j7n7o',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString('fr-FR'),
        },
        'OMFrf84GFrC1C7-BT'
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <h2 className="contact__title">Contact</h2>
          <div className="contact__text">
            <p>
              mettre un text
            </p>
            <p>
              mettre un text
            </p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name">Votre nom ( obligatoire )</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email">Votre adresse de messagerie</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="subject">Objet du message</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message">Votre message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
            />
          </div>

          {status.error && (
            <div className="contact__error">
              {status.error}
            </div>
          )}

          {status.submitted && (
            <div className="contact__success">
              Message envoyé avec succès !
            </div>
          )}

          <button 
            type="submit" 
            className="contact__submit"
            disabled={status.submitting}
          >
            {status.submitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;