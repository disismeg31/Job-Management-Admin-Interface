import React from 'react'
import logo from '../assets/logo2.png';
function Navbar() {
  return (
    // px-[26px] py-[16px] mx-50
    <nav className='bg-white text-[#303030] my-5 h-[80px] w-full max-w-screen-xl mx-auto px-4 rounded-full flex justify-between items-center text-base shadow-[0px_0px_20px_0px_rgba(127,127,127,0.15)]'>
        <div className='text-xs font-bold'>
            <img src={logo} alt="logo" className="w-10 h-auto drop-shadow-md invert" />
        </div>
        <ul className='flex items-center gap-2 font-medium mx-2'>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Home</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>About Us</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Games</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Overview</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Testimonials</li>
        </ul>
        <button className='text-white px-6 py-2 rounded-3xl font-semibold shadow-md'
        style={{
        background: 'linear-gradient(180deg, rgb(161, 40, 255), rgb(97, 0, 173))',
        }}
        >
            Create Jobs
        </button>
    </nav>
  )
}

export default Navbar

// bg-[#ffffff]