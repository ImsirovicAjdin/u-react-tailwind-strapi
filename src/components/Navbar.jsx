import React from 'react'
// import viteLogo from '/vite.svg'
import siteLogo from '/logo.svg'
import { menu, close, logo } from '../assets';

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
        <div className="flex justify-between items-center w-full h-full md:max-w-[1240px]m-auto">
            <div className="flex items-center">
                <img className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]" src={logo} alt="logo" />
            </div>
            <div className=""></div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default Navbar