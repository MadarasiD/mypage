import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

  const [ showMenu , setShowMenu] = useState('md:hidden')

  const menuItems = [
    
    {
      title: 'Home',
      key: 'home/'
    },
    {
      title: 'Skills',
      key: 'skills/'
    },
    {
      title: 'About',
      key: 'aboutme/'
    },
    {
      title: 'Projects',
      key: 'projects/'
    },
    {
      title: 'Contact',
      key: 'contact/'
    },

  ];

  const pathname = window.location.pathname

  return (
    <div className='text-white font-lob'>

      <div className={`flex bg-thema justify-between items-center p-2 shadow-lg ${showMenu!=='md:hidden' && 'flex-col'}`}>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-semibold '>M D</h1>
          <button 
          onClick={() => {
              if(showMenu=='md:hidden'){
                setShowMenu('')
              }
              else{
                setShowMenu('md:hidden')
              }
          }} 
          className='lg:hidden'>MENU</button>
        </div>


        <div className='flex md:hidden'>

          {menuItems.map((item) => {
            return (
              <li className={`list-none mx-5 p-1 ${item.key==pathname && 'gb-white text-black rounded-md'}`}>
                <Link to={`/${item.key}`}>{item.title}</Link>
              </li>
            )
          })}

        </div>


        {/* responsive navbar start */}

        <div className={`md:flex items-center w-full flex-col lg:hidden ${showMenu}`}>

          {menuItems.map((item) => {
            return (
              <li className='list-none my-2'>
                <Link to={`/${item.key}`}>{item.title}</Link>
              </li>
            )
          })}

        </div>


      </div>

    </div>
  )
}

export default Header