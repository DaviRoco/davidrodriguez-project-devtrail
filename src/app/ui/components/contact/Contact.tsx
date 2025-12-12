'use client';
import React, { useRef, useState } from 'react';
import './contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Client-side honeypot check (in addition to FormSubmit's server-side one)
    const honeypot = form.current.querySelector(
      'input[name="_honey"]',
    ) as HTMLInputElement;
    if (honeypot && honeypot.value) return;

    setStatus('sending');

    const formData = new FormData(form.current);

    try {
      // Using AJAX to keep the user on the page
      const response = await fetch(
        'https://formsubmit.co/ajax/fc8317b6fdfac495097b9236829cc04c',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        },
      );

      if (response.ok) {
        setStatus('success');
        form.current.reset();
        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in touch</h2>
      <span className="section-subtitle">Contact Me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <div className="contact-card-data">david@rodriguezcoto.com</div>
              <br />
              <a
                href="mailto:david@rodriguezcoto.com"
                className="contact-button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* FormSubmit.co Configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Reference"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Message</label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Write your message here..."
                className="contact-form-input"
                required
              ></textarea>
            </div>

            <button
              className="button button--flex"
              disabled={status === 'sending' || status === 'success'}
              style={{ opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {status === 'sending' && 'Sending...'}
              {status === 'success' && 'Message Sent!'}
              {status === 'error' && 'Error. Try Again.'}
              {status === 'idle' && 'Send Message'}

              <svg
                className="button-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z"
                  stroke={status === 'success' ? '#4CAF50' : '#292D32'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M10.1094 13.6501L13.6894 10.0601"
                  stroke={status === 'success' ? '#4CAF50' : '#292D32'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
