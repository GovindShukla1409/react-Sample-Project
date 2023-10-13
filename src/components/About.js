import React from 'react';
import about from './assets/images/about.png';
import abcw from './assets/images/abcw.png';
import ellera from './assets/images/ellery.png';
import ginger from './assets/images/ginger.png';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
    <div className='outer'>
            <Header />
      <div className='aboutbanner'>

      <div className='container'> 
        <h3>About Olvera</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
        <div className='aboubannertimg'>
        <span><img  src={about} /></span>
        <span> <img  src={abcw} /></span>
        <span> <img   src={ellera} /></span>
        <span><img  src={ginger} /></span>
      </div>
      </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default About