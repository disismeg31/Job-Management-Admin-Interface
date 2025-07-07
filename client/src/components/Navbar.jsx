import React, {useState} from 'react'
import logo from '../assets/logo2.png';
import Modal from './Modal';
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuFill } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
function Navbar() {
  const [openPopup,setOpenPopup] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // px-[26px] py-[16px] mx-50
    <>
    <nav className='bg-white text-[#303030] my-3 h-auto gap-4 w-full max-w-screen-xl mx-auto py-4 px-4 rounded-full flex flex-wrap justify-between items-center text-base shadow-[0px_0px_20px_0px_rgba(127,127,127,0.15)]'>
        <div className='flex-shrink-0'>
            <img src={logo} alt="logo" className="w-10 h-auto drop-shadow-md invert" />
        </div>
        {/* Hamburger for small screens */}
      <div className="lg:hidden">
        <button className='cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={24} /> : <VscMenu size={24} />}
        </button>
      </div>
        <ul className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row flex-wrap items-center gap-2 font-medium mx-2 min-w-[200px] cursor-pointer`}>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Home</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>About Us</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Games</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Overview</li>
            <li className='items-center px-[24px] py-2 whitespace-nowrap'>Testimonials</li>
        </ul>
        <button className='flex-shrink-0 text-white px-6 py-2 rounded-3xl font-semibold shadow-md cursor-pointer hover:brightness-110 active:brightness-90
    transition duration-150 ease-in-out'
        style={{
        background: 'linear-gradient(180deg, rgb(161, 40, 255), rgb(97, 0, 173))',
        }}
        onClick={()=>setOpenPopup(true)}
        >
            Create Jobs
        </button>
    </nav>
    {
      openPopup && 
      <Modal open={openPopup} onClose={()=>setOpenPopup(false)}/>
    }
    </>
  )
}

export default Navbar

// bg-[#ffffff]