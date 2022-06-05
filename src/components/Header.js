import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'



const Header = () => {

  const [showMenu, setShowMenu] = useState('md:hidden')

  const menuItems = [

    {
      name: 'Home',
      key: '/'
    },
    {
      name: 'Skills',
      key: '/skills'
    },
    {
      name: 'About',
      key: '/aboutme'
    },
    {
      name: 'Projects',
      key: '/projects'
    },
    {
      name: 'Contact',
      key: '/contact'
    },

  ];

  const pathname = window.location.pathname

  return (
    <div className='text-white font-lob fixed w-full z-50'>

      <div className={`navigation flex bg-neutral-800 justify-between items-center p-5 shadow-2xl ${showMenu === '' && 'md:flex-col'}`}>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-semibold hover:text-red-500 animate-pulse'>M D</h1>
          <button
            onClick={() => {
              if (showMenu === 'md:hidden') {
                setShowMenu('')
              }
              else {
                setShowMenu('md:hidden')
              }
            }}
            className='lg:hidden text-3xl'><Hamburger easing="ease-in" /></button>

              
        </div>


        <div className='flex md:hidden'>

          {menuItems.map((name) => {
            return (
              <li className={`list-none mx-8 p-1 animate-pulse hover:scale-125  hover:text-red-500 hover:underline ${name.key === pathname && 'bg-white text-black rounded-md '}`}>
                <Link to={`${name.key}`}>{name.name}</Link>
              </li>
            )
          })}

        </div>


        {/* responsive navbar start */}

        <div className={`mt-5 md:flex items-center w-full flex-col lg:hidden ${showMenu}`}>

          {menuItems.map((name) => {
            return (
              <li className={`list-none py-1 ${name.key === pathname && 'bg-white text-black rounded-md' }`}>
                <Link to={`${name.key}`}>{name.name}</Link>
              </li>
            )
          })}

        </div>


      </div>

    </div>
  )
}

export default Header