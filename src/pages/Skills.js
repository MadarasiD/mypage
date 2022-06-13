import React from 'react'
import Layout from '../components/Layout'
import {FaHtml5, FaCss3, FaReact, FaBootstrap, FaSass, FaGithub, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'

const Skills = () => {
  return (
    <Layout>
        <div>
        <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800'>
        
        <h1 className='text-6xl p-10 mb-20 pt-28 text-center underline text-white' data-aos="fade-down-right">The web development technologies I use</h1>
        <h2 className='text-2xl p-10 mb-20 text-center text-white' data-aos="fade-down-left">I am currently focusing on developing React. I would like to apply this later and develop this knowledge to a professional level.
        <br />I will soon start studying Angular as well..</h2>
        
            <div className='grid md:grid-cols-2 grid-cols-5 text-white'>

             

                <div className='text-2xl text-center mb-20'>
                <FaHtml5  size={150} className='w-full text-center text-orange-600	animate-bounce'/>
                <h3 data-aos="flip-left"
                >HTML</h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <FaCss3 size={150} className='w-full text-center text-blue-500 animate-pulse'/>
                <h3 data-aos="flip-left">Css</h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <FaBootstrap  size={150} 	 className='w-full text-center text-violet-600	animate-bounce'/>
                <h3 data-aos="flip-left">Bootstrap</h3>
                </div>

                <div className='text-2xl text-center'>
                <FaSass  size={150} 	 className='w-full text-center text-fuchsia-500		animate-pulse'/>
                <h3 data-aos="flip-left">Sass / Sccs </h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <SiTailwindcss  size={150} 	 className='w-full text-center text-sky-500		animate-bounce	'/>
                <h3 data-aos="flip-left">Tailwind-css </h3>
                </div>

                <div className='text-2xl text-center'>
                <TbBrandJavascript  size={150} 	 className='w-full text-center text-yellow-500		animate-pulse'/>
                <h3 data-aos="flip-left">Javascript </h3>
                </div>

                <div className='text-2xl text-center mb-20 '>
                <FaGithub  size={150} 	 className='w-full 		text-center text-black animate-bounce'/>
                <h3 data-aos="flip-left">Git </h3>
                </div>

                <div className='text-2xl text-center'>
                <FaNodeJs size={150} 	 className='w-full 		text-center text-green-500 animate-pulse'/>
                <h3 data-aos="flip-left">NodeJs </h3>
                </div>

                <div className='text-2xl text-center'>
                <FaReact  size={150} color='cyan' className='w-full text-center  animate-bounce'/>
                <h3 data-aos="flip-left">React</h3>
                </div>

                

            </div>


        </div>
        </div>
    </Layout>
  )
}

export default Skills