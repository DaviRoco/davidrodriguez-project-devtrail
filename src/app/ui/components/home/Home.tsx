'use client';
import Image from 'next/image';
import React from 'react';
import ProfileImg from '../../assets/profile.jpeg'; // Import the image
import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import './home.css';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />

          <div className="home-img-wrapper">
            <Image
              src={ProfileImg}
              alt="David Rodríguez Profile"
              fill
              priority
              className="home-img"
            />
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
