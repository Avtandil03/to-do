import React, { useState, useEffect }from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LeftSideBar from './pages/LeftSideBar'
import RightSideBar from './pages/RightSideBar'
import { RouterProvider, } from "react-router-dom";
import { router } from './router/router';
import MySwitch from './UI/MySwitch';

function App() {
  const [theme, setTheme]= useState('ligth')

  useEffect(() => {
    if(theme === 'dark' ){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='flex justify-between h-screen w-screen'>
      <LeftSideBar />
    <MySwitch/>
      
      <RouterProvider router={router} />
      <RightSideBar />
    </div>
  )
}

export default App
