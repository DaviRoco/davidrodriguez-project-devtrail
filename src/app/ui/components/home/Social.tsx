import React from 'react';

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.linkedin.com/in/david-rodriguez-coto"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/DaviRoco"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://x.com/DevRoco"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
