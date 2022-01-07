import React from 'react';

const HeroContainer = () => {
  return (
    <div className='flex w-screen h-full justify-around mt-4 p-4 '>
      <div className='flex flex-col w-1/2 p-4 justify-center'>
        <h1 className='font-extrabold text-5xl text-left '>
          Mint an NFT, Become a Fan, get exclusive discounts.
        </h1>
        <p className='mt-8  text-lg text-left'>
          We help artists and fans connect better. Mint your artist's NFTs and
          get exclusive discounts on their shows and events.
        </p>
        <button className='rounded p-2 shadow-md  shadow-indigo-500/40   w-1/3 mt-12 text-white text-lg font-semibold bg-gradient-to-r from-bluecolor via-purple-500 to-pinktext'>
          Become a Fan
        </button>
      </div>
      <div>
        <img src={require('../assets/NFT.jpg')} alt='NFT' width={300} height={500} />
      </div>
    </div>
  );
};

export default HeroContainer;
