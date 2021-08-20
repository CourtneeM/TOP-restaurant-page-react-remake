import React from 'react';
import Header from './components/Header';

import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className='message-container'>
          <p className='short-blurb'>Beat the summer heat with our cool snowcones!</p>
          <p className='long-blurb'>We carry a variety of flavors; from the classics to the latest popular flavors. There's sure to be a flavor that you love, and new flavors for you to discover!</p>
        </div>

        <img src={'./images/snow-cone.jpg'} alt='snowcone' className='snow-cone-img' />
      </div>
    </>
  );
}

export default Home;
