import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LeftSideBar from './pages/LeftSideBar'
import RightSideBar from './pages/RightSideBar'
import { RouterProvider, } from "react-router-dom";
import { router } from './router/router';


function App() {

  return (
    <div className='flex justify-between h-screen w-screen'>
      <LeftSideBar />
        <RouterProvider router={router} />
      <RightSideBar />
    </div>
  )
}

export default App
