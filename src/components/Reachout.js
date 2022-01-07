import React from 'react';

const Reachout = () => {
  return (
    <div className=' h-96 p-4 mt-8 flex flex-col justify-center items-center'>
      <h1 className='font-extrabold text-4xl text-white'>
        Reach out to us if you are an {' '}
        <span className='text-pinktext'>Artist</span>
      </h1>
      <button className='rounded p-2 shadow-md  shadow-indigo-500/40 w-1/4 mt-12 text-white text-lg font-semibold bg-gradient-to-r from-bluecolor via-purple-500 to-pinktext'>
        Contact Us
      </button>
    </div>
  );
};

export default Reachout;
