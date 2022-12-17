import React from 'react';
import Intro from './intro';
import Skills from './skills';
import Social from './social';
import Footer from './footer';
import '../myData.scss';

const MyData = () => {
  return (
    <div className="data-container full-width">
      <Intro />
      <Skills />
      <Social />
      <Footer />
    </div>
  );
};

export default MyData;
