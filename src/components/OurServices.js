import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function OurServices() {
  return (
    <>
    <div className='outer'>
            <Header />
      <div className='services_outer'>

      <div className='container'> 
         
         <div className='row pb-5'>
        <div className='col-md-12'>

          <div className='serv_top'>
            <ul>
              <li><h2>150+</h2><span>Projects</span></li>
              <li><h2>80+</h2><span>Clients</span></li>
              <li><h2>200+</h2><span>Professionals</span></li>
              <li><h2>97%</h2><span>Clients</span></li>
            </ul>
          </div> 

        </div> 

         </div>

         <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='serc_cont_left'>
              <span>Services</span>
              <h2>Our Services That Can Help Your Business</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='serc_cont_right'>
              <ul>
                <li>
                  <span>01</span>
                  <h3>Sustainability <Link>→</Link></h3>
                </li>
                <li>
                  <span>02</span>
                  <h3>Small Business <Link>→</Link></h3>
                </li>
                <li>
                  <span>03</span>
                  <h3>Forensic Services<Link>→</Link></h3>
                </li>
                <li>
                  <span>04</span>
                  <h3>Risk Management <Link>→</Link></h3>
                </li>
                <li>
                  <span>05</span>
                  <h3>CFO Advisory <Link>→</Link></h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default OurServices