import React, { useState } from 'react';
import MySwitch from '../UI/MySwitch';


const LeftSideBar = () => {
  const [color, setColor] = useState('')
  return (
    <div className='flex-col bg-gray-600 min-w-[200px] max-w-[430px] pt-52 pl-10' >
    <MySwitch changed={console.log('....')}/>
    <div className="pb-10"></div>
    <MySwitch/>
    </div>
  )
};

export default LeftSideBar;