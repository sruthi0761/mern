import React from 'react';

import { Place, MailOutline, LocalPhone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className='p-8 grid gap-x-16 gap-y-4 md:grid-cols-3'>
      <div>
        <h1 className='font-bold text-3xl uppercase mb-4 tracking-wider'>
          <a href=''>Shopping Cart</a>
        </h1>
        <p className='text-justify'>
        Discover the latest trends and timeless styles with our new arrivals collection!
         From chic everyday essentials to standout statement pieces,
          we’ve got everything you need to refresh your wardrobe.
           Crafted with premium fabrics and designed for ultimate comfort, 
           our clothing blends fashion with functionality.
            Plus, don’t miss out on our limited-time offer—get 30% off on all new arrivals,
             upgrade your style without breaking the bank. 
             SHOP NOW and redefine your look with pieces that are as unique as you are!
        </p>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Useful Links</h2>
        <div className='grid grid-cols-2'>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Man Fashion</a>
            </li>
            <li>
              <a href=''>Accessories</a>
            </li>
            <li>
              <a href=''>Order Tracking</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=''>Cart</a>
            </li>
            <li>
              <a href=''>My Account</a>
            </li>
            <li>
              <a href=''>Wishlist</a>
            </li>
            <li>
              <a href=''>Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-4 tracking-wider'>Contact</h2>
        <ul>
          <li>
            <Place className='mr-4' />
            <span>Kerala,India.</span>
          </li>
          <li>
            <LocalPhone className='mr-4' />
            <span>9778564320</span>
          </li>
          <li>
            <MailOutline className='mr-4' />
            <span>contact@Shpping cart.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
