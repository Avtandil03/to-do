import React, { useState, useEffect }from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LeftSideBar from './pages/LeftSideBar'
import RightSideBar from './pages/RightSideBar'
import { RouterProvider, } from "react-router-dom";
import { router } from './router/router';
import MySwitch from './UI/MySwitch';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [showSett, setShowSett] = useState(true)



  return (
    <div className='flex justify-between  w-screen '>
      {/* <LeftSideBar />      
      <RouterProvider router={router} />
      <RightSideBar /> */}
      {isAuth ? showSett && <Settings /> : <Login/>}
    </div>
  )
}

export default App
