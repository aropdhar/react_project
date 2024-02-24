import React from 'react'
import Footersec from './footer/Footersec'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
      <Navbar/>
         <Outlet/>
      <Footersec/>
    </div>
  )
}

export default Rootlayout
