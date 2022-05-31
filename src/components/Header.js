import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

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
      title: 'About me',
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

  return (
    <div className='text-white font-lob'>

      <div className="flex bg-thema justify-between items-center p-2 shadow-lg">
        <div>
          <h1 className='text-4xl font-semibold'>M D</h1>
        </div>


        <div className='flex'>

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