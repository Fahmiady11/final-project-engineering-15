import React from 'react';
import logo from '../../Assets/logo-white.svg';
import fb from '../../Assets/fb-icon.svg';
import twitter from '../../Assets/twitter-icon.svg';
import insta from '../../Assets/insta-icon.svg';
import linkedin from '../../Assets/linkedin-icon.svg';
function Footer() {
  return (
    <>
      <footer className='bg-slate-700 mt-12 pt-12 pb-12 border-t-8 border-orange-500'>
        <div className='container max-w-full'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full px-4 mb-12 md:w-1/3'>
              <img src={logo} alt='logo' className='w-32'></img>
              <p className='text-white text-sm ml-3 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 ml-3'>
              <h3 className='font-semibold text-xl text-white mb-3'>Company</h3>
              <ul className='text-slate-200'>
                <li>
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>About Us</a>
                </li>
                <li>
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>Legal Information</a>
                </li>
                <li>  
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>Contact Us</a>
                </li>
                <li>  
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>Blogs</a>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 ml-3 '>
              <h3 className='font-semibold text-xl text-white mb-3'>Help Center</h3>
              <ul className='text-slate-200'>
                <li>
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>Find a Property</a>
                </li>
                <li>
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>How To Hosts?</a>
                </li>
                <li>  
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>Why Us</a>
                </li>
                <li>  
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>FAQs</a>
                </li>
                <li>  
                  <a href='/' className='inline-block text-base hover:text-orange-500 mb-2'>Rental Guides</a>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 ml-3 '>
              <h3 className='font-semibold text-xl text-white mb-3'>Contact Info</h3>
              <ul className='text-slate-200'>
                <li>
                  <p className='inline-block text-base mb-2'>Phone: 1234567890</p>
                </li>
                <li>
                  <p className='inline-block text-base mb-2'>Email: company@email.com</p>
                </li>
                <li>
                  <p className='inline-block text-base mb-2'>Location: 100 Smart Street, LA, USA</p>
                </li>
                <li className='flex flex-row mt-4'>
                  <a href='/'> <img href='#' src={fb} alt='fb' className='w-7' /> </a>
                  <a href='/'> <img src={insta} alt='fb' className='w-7 ml-5' /> </a>
                  <a href='/'> <img src={twitter} alt='fb' className='w-7 ml-5' /> </a>
                  <a href='/'> <img src={linkedin} alt='fb' className='w-7 ml-5' /> </a>
                </li>
              </ul>
            </div>

          </div>
          <div className='w-full pt-10 border-t border-white'>
            <p className='text-white text-center'>
              © 2022 CodeIn | All rights reserved
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
