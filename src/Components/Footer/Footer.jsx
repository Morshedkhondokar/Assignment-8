import React from 'react';

const Footer = () => {
    return (
      <div className=' max-w-6xl mx-auto'>
        <div>
          <h1 className='text-2xl font-bold text-center pt-12'>Gadget Heaven</h1>
          <p className='font-medium text-center text-[#78787b] my-4'>Leading the way in cutting-edge technology and innovation.</p>
          <hr className=' text-[#bdbdbd]' />
        </div>

      
    <footer className="footer sm:footer-horizontal  text-neutral-content p-10 md:justify-center md:gap-[166px]">
  <nav className='text-[#6c6b6f] md:flex flex-col justify-center items-center'>
    <h6  className="text-xl font-bold text-black ">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav  className='text-[#6c6b6f] md:flex flex-col justify-center items-center'>
    <h6  className="text-xl font-bold text-black ">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav  className='text-[#6c6b6f] md:flex flex-col justify-center items-center'>
    <h6 className="text-xl font-bold text-black ">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </div>
    );
};

export default Footer;