import React, { useState } from 'react';
import './../css/style.css';
import Olvera from './assets/images/Olvera-Logo-Black 1.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


function Header() {

const [menu, setmenu] =  useState(false);

console.log("menu", menu)

    return (
        <>

            <div className='headertop'>
                <h3>Turning Uncertainity Into your advantage</h3>

            </div>

            <div className='container'>

                <div className='row pt-5 pb-5 align-items-center'>
                    <div className='col-md-2 col-sm-12'>
                        <div className='logo'>
                            <img src={Olvera} className='img-responsive' />
                        </div>
                    </div>
                    <div className='col-md-10  col-sm-12'>
                    <button className='menutoggel' onClick={()=>setmenu(cur => !cur)}>{menu == true ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}</button>

                        <div className={menu == true ? 'menu block' : 'menu'}>
                            <ul>
                                <li className='active'><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/services'>Our services</Link></li>
                                <li><Link to='/experience'>Our experience</Link></li>
                                <li><Link to='/careers'>Resources</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>

                                <li><button >
                                    Contact Us
                                </button></li>
                                <li> <Link to='/'> <FacebookOutlinedIcon /></Link>
                                    <Link to='/'> <InstagramIcon /></Link>
                                    <Link to='/'> <LinkedInIcon /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
               
            </div>
        </>

    )
}

export default Header