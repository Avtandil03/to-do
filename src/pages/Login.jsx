import React from 'react';

const Login = () => {
  return (
    <div className="login_page absolute h-full w-full bg-main-bg flex flex-col items-center justify-center" >
      <div className=" container flex flex-col items-center justify-center text-center max-w-[488px] mx-auto">
        <div className='my-auto flex flex-col items-center'>
          <h1 className='font-thin text-4xl mb-10'>Welcome to Microsoft To Do</h1>
          <img className='mb-9 max-w-xs' src="/src/assets/Illustrations/Login/Login.svg" alt="Login.svg" />
          <button className='bg-btn-blue h-[34px] w-[257px] text-sm text-white active:opacity-90 mb-6'>Sign in</button>
          <p className='max-w-[237px]  text-txt-gray mb-20 text-lg'>Sign in with a work, school, or Microsoft account</p>
        </div>


      </div>
      <img className='max-w-[100px] bottom-10 fixed' src="/src/assets/Illustrations/Microsoft/Microsoft.svg" alt="Microsoft.svg" />
    </div>

  ); 
};

export default Login;