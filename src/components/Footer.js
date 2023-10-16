import React from 'react'
import Olvera from './assets/images/Olvera-Logo-Black 2.png'


const Footer = () => {
  return (
   <>
   <div className='footer'>

<div className='container'>
<div className='row'>
    <div className='col-md-12 text-center'>
        
<h2>We are open and accepting to all.<br></br>
Come work with us
</h2>

<p>Experts teach you everything from the comfort of your own home.Improve your career <br /> today by enrolling in excellent courses at affordable prices.</p>
<button className='getstarted'>Get Started</button>


</div>
</div>

<div className='row mt-5'>
    <div className='col-md-3 col-sm-6'>
        <div className='footerlog'>
        <img src={Olvera} className='img-responsive mb-4' />
        <img src={Olvera} className='img-responsive' />
        <p>Turning Uncertainity Into Your Advantage</p>
        </div>
    </div>

    <div className='col-md-3 mt-5 col-sm-6'>
        <div className='footermenu'>
            <h2>Resources</h2>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Articles</a></li>
                <li><a href=''>Videos & Guides</a></li>
                <li><a href=''>About Us</a></li>
            </ul>
        </div>
    </div>
    <div className='col-md-3 col-sm-6 mt-5'>
        <div className='footermenu'>
            <h2>Careers</h2>
            <ul>
                <li><a href=''>Olevera academy</a></li>
                <li><a href=''>Privacy Policy</a></li>
                <li><a href=''>Cookies</a></li> 
            </ul>
        </div>
    </div>
    <div className='col-md-3 col-sm-6 mt-5'>
        <div className='footermenu'> 
            <ul>
                <li><a href=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a></li>
                <li className='mt-3'><a href=''>Phone: (04) 09973 7829</a></li>
                <li className='mt-3'><a href=''>Email: azibuyanquik@Olvera.com</a></li> 
            </ul>
        </div>
    </div>
    
</div>


</div>

<div className='copybox'>
    <div className='container'>
<div className='row'>
    <div className='col-md-6'>
        <p className='copy'>2023 Olevera advisory.All right reserved</p>
    </div>
</div>
</div>
</div>

   </div>
   
   </>
  )
}

export default Footer
