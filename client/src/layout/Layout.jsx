import React from 'react'
import Header from '../components/Header.jsx';
import List from '../components/List.jsx';
function Layout() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <header className='sticky top-0 z-10 bg-white shadow'>
        <Header/>
      </header>
      <main className="flex-1 overflow-y-auto">
        <List/>
      </main>
         
    </div>
  )
}

export default Layout