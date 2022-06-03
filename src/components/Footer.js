import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-screen bg-neutral-800 flex justify-center'>
        <div className='md:w-full w-1/2'>
                  <div className='bg-neutral-800 p-10 font-lob text-neutral-400 text-center '>
                  
                  <p> Developed and created - Madarasi Dániel</p>
                  <div className='flex justify-between my-5 w-full text-white text-3xl'>
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaLinkedin />
                  </div>


                </div>
          </div>
    </div>
  )
}

export default Footer