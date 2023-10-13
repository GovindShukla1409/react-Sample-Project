import React from 'react';
import about from './assets/images/about.png';
import abcw from './assets/images/abcw.png';
import ellera from './assets/images/ellery.png';
import ginger from './assets/images/ginger.png';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Guides() {
  document.title='OLVERA-Guides';
  return (
    <>
    <div className='outer'>
            <Header />
      <div className='guidesbanner'>

      <div className='container'> 
        <h3>Olvera Guides</h3>

        <div className='viewmore'>
            <span>View More</span> <Link to="">→</Link>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
        
      </div>
      </div>

      <Footer />
     
      </div>
    </>
  )
}

export default Guides