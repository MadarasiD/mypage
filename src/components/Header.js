import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const Header = () => {

  const [showMenu , setShowMenu] = useState('md:hidden')

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
      title: 'About me',
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

  return (
    <div className='text-white font-lob'>

      <div className="flex bg-thema justify-between items-center p-2 shadow-lg">
        <div className='flex justify-between w-full'>
          <h1 className='text-4xl font-semibold '>M D</h1>
          <button 
          onClick={() => {
              setShowMenu()
          }} 
          className='lg:hidden'>MENU</button>
        </div>


        <div className='flex md:hidden'>

          {menuItems.map((item) => {
            return (
              <li className='list-none mx-9'>
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