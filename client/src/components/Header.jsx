import React from 'react'
import Navbar from './Navbar.jsx';
import SearchComponent from './SearchComponent.jsx';
function Header() {
  return (
    <div className='bg-[#ffffff] flex flex-col w-full'>
      <Navbar/>
      <SearchComponent/>
    </div>
  )
}

export default Header