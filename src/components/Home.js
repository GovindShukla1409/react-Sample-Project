import React from 'react';
import Header from './Header';
import Backgroundimg from './assets/images/business-cardboard.png';
import Footer from './Footer';

function Home() {
    return (
        <div className='outer'>
            <Header />

            <div className='homebanner'>
                    {/* <img src={Backgroundimg} />  */}

                 <div className='container'>   <div className='banner-cont '>
                    
                    <h2>
                    Start your story with Olvera
                    </h2>
                    <button className='cnt'>
                        CONTACT US
                    </button>
                    
                    </div>
                    </div>
                    
                </div>
                <Footer />
        </div>
    )
}

export default Home