import React from 'react';

const Header = () => {
  return (
    <div className=' h-16 flex p-4 items-center justify-between '>
      <div><img src={require('../assets/fandomDAO.png')} alt="Logo" width={50} height={100}/></div>
      <div className='flex justify-between space-x-8'>
        <a href='#home' className='underline'>Home</a>
        <a href='#nft'>NFTs</a>
        <a href="#about">About</a>
        <a href='#contact'>Contact us</a>
        
      </div>
      <div>
        <button className='text-white font-semibold rounded p-2  bg-gradient-to-r from-bluecolor via-purple-500 to-pinktext'>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
