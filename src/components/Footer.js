import React from 'react';

const Footer = () => {
  return (
    <div className='flex w-full justify-around  text-left mt-16 p-4 h-48 border-t border-darkgray'>
      <div className='flex flex-col text-left'>
        <h3 className='capitalize text-lg font-extrabold tracking-widest'>
          FANDOMDAO
        </h3>
        <p className='text-white mt-4'>
          We help artists and fans connect better. Mint your artist's NFTs and
          get exclusive discounts on their shows and events.
        </p>
      </div>
      <div className='flex flex-col text-white gap-2'>
        <a href='#home'>Home</a>
        <a href='#nft'>NFTs</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact us</a>
      </div>
      <div className='flex flex-col text-white gap-1'>
        <a href='#home'>Privacy Policy</a>
        <a href='#home'>Terms and conditions</a>
      </div>
    </div>
  );
};

export default Footer;
