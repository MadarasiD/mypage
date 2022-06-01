import React from 'react'
import Layout from '../components/Layout';
import '../styles/Home.css'
import {FaHtml5, FaCss3, FaReact, FaBootstrap, FaSass, FaGithub, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import  TypeWriter  from 'react-simple-typewriter';
import "react-simple-typewriter/dist/index"








 
const Home = () => {

  
  return (
    <Layout>
      <div >
            

        {/* home section*/}    
        <div className="h-screen bg-neutral-800	">

          <div className="grid md:grid-cols-1 grid-cols-2 items-center transfrom transition skew-y-12 md:skew-y-0 ">

            <div className='font-bold text-center justify-center md:px-3 '>
              <h1 className='text-4xl  text-emerald-700	md:text-2xl md:pt-32 animate-pulse tarnsform transition-all animate-bounce'>
                Hi, my name is<br /> <b className='text-emerald-400	text-5xl '>
                
                   Madarasi Dániel</b></h1>
                   
              
              <h1 className='text-3xl  text-teal-500	ms:text-xl tarnsform transition-all animate-bounce'>
                  Frontend <b className='text-red-600'>Developer</b>
              </h1>
            </div>

            <div id="parallax">

              <div className="header-shape shape-one ">
                      <img  src={require("../assets/HTML5.png")} alt="" />
              </div>

              <div className="header-shape shape-two">
                      <img src={require("../assets/CSS.png")} alt="" />
              </div>

              <div className="header-shape shape-three">
                      <img src={require("../assets/js.jpg")} alt="" />
              </div>

              <div className="header-shape shape-fore">
                      <img src={require("../assets/Bootstrap.png")} alt="" />
              </div>

              <div className="header-shape shape-five">
                      <img src={require("../assets/REACT.png")} alt="" />
              </div>

              <div className="header-shape shape-six">
                      <img src={require("../assets/Angular.png")} alt="" />
              </div>

              <div className="header-shape shape-seven">
                      <img src={require("../assets/Photoshop2.png")} alt="" />
              </div>

                
            </div>


            <div className='grid md:grid-cols-1 grid-cols-2 h-screen '>
              <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

          </div>

        </div>


        {/* Skills */}

        <div>
        
        <h1 className='text-6xl p-10  text-center underline'>The web development technologies I use</h1>
        
            <div className='grid md:grid-cols-2 grid-cols-5 '>

             

                <div className='text-2xl text-center mb-20'>
                <FaHtml5  size={150} className='w-full text-center text-orange-600	animate-bounce'/>
                <h3>HTML</h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <FaCss3 size={150} className='w-full text-center text-blue-500 animate-pulse'/>
                <h3>Css</h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <FaBootstrap  size={150} 	 className='w-full text-center text-violet-600	animate-bounce'/>
                <h3>Bootstrap</h3>
                </div>

                <div className='text-2xl text-center'>
                <FaSass  size={150} 	 className='w-full text-center text-fuchsia-500		animate-pulse'/>
                <h3>Sass / Sccs </h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <SiTailwindcss  size={150} 	 className='w-full text-center text-sky-500		animate-bounce	'/>
                <h3>Tailwind-css </h3>
                </div>

                <div className='text-2xl text-center'>
                <TbBrandJavascript  size={150} 	 className='w-full text-center text-yellow-500		animate-pulse'/>
                <h3>Javascript </h3>
                </div>

                <div className='text-2xl text-center mb-20'>
                <FaGithub  size={150} 	 className='w-full 		text-center  animate-bounce'/>
                <h3>Git </h3>
                </div>

                <div className='text-2xl text-center'>
                <FaNodeJs size={150} 	 className='w-full 		text-center text-green-500 animate-pulse'/>
                <h3>NodeJs </h3>
                </div>

                <div className='text-2xl text-center'>
                <FaReact  size={150} color='cyan' className='w-full text-center  animate-bounce'/>
                <h3>React</h3>
                </div>


            </div>


        </div>
      </div>
    </Layout>
  )
}

export default Home