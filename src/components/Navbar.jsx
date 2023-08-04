import React, { useState } from 'react'
// import viteLogo from '/vite.svg'
import siteLogo from '/logo.svg'
import { menu, close, logo } from '../assets';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
        <div className="flex justify-between items-center w-full h-full md:max-w-[1240px]m-auto">
            <div className="flex items-center">
                <img className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]" src={logo} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className="hidden md:flex sm:mr-10 md:mr-10">
                <button className='border-none bg-transparent text-black hover:text-white hover:bg-indigo-600 px-8 py-3 mr-4'>Login</button>
                <button className="px-8 py-3">Sign Up</button>
            </div>

            <div className="md:hidden" onClick={handleClick} >
                <img className="w-[28px] h-=[28px] object-contain mr-10" src={toggle?close:menu} alt="menu toggle" />
            </div>

        </div>
        <ul className={toggle?
                "absolute bg-white w-full px-8 md:hidden":
                "hidden"}
        >
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
            <div className="flex flex-col">
                <button className='bg-transparent text-black hover:text-white hover:bg-indigo-600 px-8 py-3 mb-4'>Login</button>
                <button className="px-8 py-3 mb-5">Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar