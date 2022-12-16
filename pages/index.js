'use client';

import { useState } from 'react';

import { Footer, Navbar } from '../components';
import { About, Explore, Hero } from '../sections';
import { setDark } from '../constants';

const MainApp = () => {
  const [darkMood, setDarkMood] = useState(true);

  const setMood = () => {
    setDark(!darkMood);
    setDarkMood(!darkMood);
  };
  return (
    <div className={`${darkMood ? 'dark' : ''}  overflow-hidden`}>
      <Navbar setMood={setMood} />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
