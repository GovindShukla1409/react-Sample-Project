import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Careers() {
  return (
    <>
    <div className='outer'>
            <Header />
      <div className='careerbanner'>

      <div className='container'> 
      
      <div className='career_left'>

      <span>CAREERS</span>
      <h2>Careers at Olvera</h2>

      <p>
        Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.
      </p>

      <Link>Search Careers</Link>

      </div>

          
        
      </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Careers