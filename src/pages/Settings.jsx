import React from 'react';

const Settings = () => {
  return (
    <div className='overflow-hidden settings absolute w-screen h-screen bg-white text-gray-300 text-3xl '>
      <header className='header p-2 flex h-14 border-b border-gray-700 items-center '>
        <button className='w-10 h-10  hover:bg-neutral-800 mr-4 flex justify-center items-center'>
          <img src="/src/assets/icons/back.png" alt="back.png" className='opacity-100' />
        </button>
        <p>Settings</p>
      </header>
      <section className='overflow-y-auto h-full'>
        <div className=" my-container  mx-auto min-w-40 max-w-[530px] ">
          <div className="account py-8 border-b border-gray-700 h-40 flex justify-between items-center ">     
            <img src="" /* alt="microsoft-account image" */ className='account__image w-[85px] h-[85px] rounded-full bg-green-500 '/>
            <div className="account__info">
              <h1>Avtandil Saparov</h1>
              <p className='text-sm'>avtandil32@outlook.com</p>
            </div>
            <div className="account__buttons flex flex-col justify-around text-sm h-full w-32">
              <button className='h-8 bg-neutral-800 rounded-md' >Manange account</button>
              <button className='h-8 bg-red-700 rounded-md' >Sign out</button>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Settings;