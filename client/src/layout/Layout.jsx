import React from 'react'
import Header from '../components/Header.jsx';
import List from '../components/List.jsx';
function Layout() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
         <Header/>
         <List/>
    </div>
  )
}

export default Layout