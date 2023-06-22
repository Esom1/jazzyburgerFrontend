import React from 'react';
import '../styles/Navbar.css';
import navicon from '../images/nav icon.png'
import location from '../images/location icon.png'
import product from '../images/all product icon.png'
import avatar from '../images/login icon.png'
import arrowdown from '../images/arrow down icon.png'
import cart from '../images/cart icon.png'
// import hero from '../images/welcome image.png'
import hero from '../images/image 3.png'

const Navbar = () => {
  return (
    <div className='nav-bar container'>
     <div className='d-flex justify-content-between mt-4'>
     <div className='left-nav d-md-flex gap-3'>
        <img className='nav-icon' src={navicon} alt="" />
        <img className='d-none d-lg-block same location-icon' src={location} alt="" />
        <p className='d-none d-lg-block nav-text'>Lagos, Nigeria</p>
      </div>
      <div className='right-nav d-flex justify-content-around mt-4 gap-4'>
        <div className='d-md-flex gap-2'>
        <img className='same mt-2 product-icon' src={product} alt="" />
        <p className='d-none d-lg-block product-text'>All Products </p>
        </div>
       <div className='d-md-flex gap-1'>
       <img className='same product-icon' src={avatar} alt="" />
        <p className='d-none d-lg-block product-text2'>Hi,Guests</p>
        <img className='d-none d-lg-block same arrow-icon mt-2' src={arrowdown} alt="" />
       </div>
       <div> <img className='same product-icon' src={cart} alt="" /></div>
      </div>
     </div>
     <div>
      <img className='welcome-icon mt-5 mb-3 img-fluid w-100' src={hero} alt="" />
     </div>
    </div>
  )
}

export default Navbar