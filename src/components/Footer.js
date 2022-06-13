import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-screen bg-neutral-800 flex justify-center'>
        <div className='md:w-full w-1/2'>
                  <div className='bg-neutral-800 p-10 font-lob text-neutral-400 text-center '>
                  
                  
                  <div className='flex justify-between my-5 w-full text-white text-3xl border-b-4'>
                    <div className='flex justify-between my-5 w-full text-white text-3xl '>
                    <a href="https://www.facebook.com/daniel.madarasi.1/" target='_blank'><FaFacebook className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/></a>
                    <a href="https://github.com/MadarasiD" target='_blank'><FaGithub className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/></a>
                    <a href="https://www.instagram.com/madarasidaniel/" target='_blank'><FaInstagram className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out'/></a>
                    <a href="https://www.linkedin.com/in/d%C3%A1niel-madarasi-a8b5661b2/" target='_blank'><FaLinkedin className='hover:text-red-700 hover:text-4xl hover:transition-all hover:transition-ease-in-out' /></a>
                    </div>
                  </div>


                  <p> Developed and created - Madarasi Dániel</p>

                </div>
          </div>
    </div>
  )
}

export default Footer