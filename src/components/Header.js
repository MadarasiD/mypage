import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'


const Header = () => {

  const [showMenu, setShowMenu] = useState('md:hidden')

  const menuItems = [

    {
      title: 'Home',
      key: '/'
    },
    {
      title: 'Skills',
      key: '/skills'
    },
    {
      title: 'About',
      key: '/aboutme'
    },
    {
      title: 'Projects',
      key: '/projects'
    },
    {
      title: 'Contact',
      key: '/contact'
    },

  ];

  const pathname = window.location.pathname

  return (
    <div className='text-white font-lob'>

      <div className={`flex bg-thema justify-between items-center p-2 shadow-[#3C3C3C] ${showMenu === '' && 'md:flex-col'}`}>
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-semibold '>M D</h1>
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

          {menuItems.map((item) => {
            return (
              <li className={`list-none mx-5 p-1 hover:scale-125 ${item.key === pathname && 'bg-white text-black rounded-md '}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}

        </div>


        {/* responsive navbar start */}

        <div className={`mt-5 md:flex items-center w-full flex-col lg:hidden ${showMenu}`}>

          {menuItems.map((item) => {
            return (
              <li className={`list-none py-1 ${item.key === pathname && 'bg-white text-black rounded-md' }`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}

        </div>


      </div>

    </div>
  )
}

export default Header