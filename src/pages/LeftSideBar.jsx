import React, { useState } from 'react';


const LeftSideBar = () => {
  const [color, setColor] = useState('')
  return (
    <div className='flex-col bg-272727 min-w-[200px] max-w-[430px]'>
      <input onChange={e => { setColor(e.target.value) }} type="color" value={'#272727'} />
    </div>
  );
};

export default LeftSideBar;