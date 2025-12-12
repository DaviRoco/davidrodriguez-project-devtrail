import React from 'react';

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">
        David Rodríguez
        <span className="home-hand">👋</span>
      </h1>

      <h3 className="home-subtitle">Full-Stack Developer</h3>
      <p className="home-description">
        I'm a software engineer stationed in Costa Rica, dedicated to building
        comprehensive, scalable, and intelligent web solutions.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
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
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.34"
            d="M10.1094 13.6501L13.6894 10.0601"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default Data;
