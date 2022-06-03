import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-screen bg-neutral-800 flex justify-center'>
        <div className='md:w-full w-1/2'>
                  <div className='bg-neutral-800 p-10 font-lob text-neutral-400 text-center '>
                  
                  
                  <div className='flex justify-between my-5 w-full text-white text-3xl border-b-4'>
                    <div className='flex justify-between my-5 w-full text-white text-3xl '>
                    <FaFacebook className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/>
                    <FaGithub className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/>
                    <FaInstagram className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/>
                    <FaLinkedin className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/>
                    </div>
                  </div>


                  <p> Developed and created - Madarasi Dániel</p>

                </div>
          </div>
    </div>
  )
}

export default Footer