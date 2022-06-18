import React from 'react'
import Layout from '../components/Layout';
import '../styles/Home.css'
import {FaHtml5, FaCss3, FaReact, FaBootstrap, FaSass, FaGithub, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import { saveAs } from "file-saver";



 
const Home = () => {

    const saveFile = () => {
        saveAs(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "example.pdf"
        );
      };
  
  return (
    <Layout>
      <div  >
            

        {/* home section*/}    
        <div className="bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800 ">

          <div className="grid md:grid-cols-1 grid-cols-2 items-center transfrom transition skew-y-12 md:skew-y-0 ">

            <div className='font-bold 	 text-center justify-center md:px-3 '>
              <h1 className='text-4xl  text-emerald-700	md:text-2xl md:pt-36 animate-pulse tarnsform transition-all animate-bounce ' >
                Hi, my name is<br /> <b className='text-emerald-400	text-5xl '>
                
                   Madarasi Dániel</b></h1>
                   
              
              <h1 className='text-3xl  text-teal-500	ms:text-xl tarnsform transition-all animate-bounce' >
                  Frontend <b className='text-red-600'>Developer</b>
              </h1>

             
          

            </div>

            <div className="sm:hidden" id="parallax">

              <div className="header-shape shape-one  hover:text-lg">
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


            <div className='grid md:grid-cols-1  grid-cols-2 h-screen md:h-3/6'>
              <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

          </div>

        </div>
        {/* home section end*/} 

        {/* Skills section start*/}
        

        <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400 '>
        
        <h1 className='text-white text-center text-4xl underline decoration-wavy pb-5 font-extrabold pt-40' data-aos="fade-down-right">You can download my CV with the button below</h1>

        <a className='flex justify-center' href="cvmadarasid.pdf" download="Madarasi Daniel.pdf" target="_blank"><button className='text-green-900	 border-red-300	 rounded-full p-2 border-2 bg-red-200 hover:bg-red-800 hover:text-emerald-300	'><h3 className='text-xl text-bold underline decoration-wavy font-extrabold	'>Download my CV</h3></button></a>
        
        <h1 className='text-6xl p-12 md:pt-24 mb-20 text-center underline text-white' data-aos="fade-down-right">The web development technologies I use</h1>
        
            <div className='grid md:grid-cols-2 grid-cols-5 text-white'>

             

                <div className='text-2xl text-center mb-20 ' data-aos="zoom-in">
                <FaHtml5  size={150} className='w-full text-center text-orange-600	animate-bounce'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    >HTML</h3>
                </div>

                <div className='text-2xl text-center mb-20' data-aos="zoom-in">
                <FaCss3 size={150} className='w-full text-center text-blue-500 animate-pulse'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Css</h3>
                </div>

                <div className='text-2xl text-center mb-20'data-aos="zoom-in">
                <FaBootstrap  size={150} 	 className='w-full text-center text-violet-600	animate-bounce'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Bootstrap</h3>
                </div>

                <div className='text-2xl text-center'data-aos="zoom-in">
                <FaSass  size={150} 	 className='w-full text-center text-fuchsia-500		animate-pulse'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Sass / Sccs </h3>
                </div>

                <div className='text-2xl text-center mb-20' data-aos="zoom-in">
                <SiTailwindcss  size={150} 	 className='w-full text-center text-sky-500		animate-bounce	'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Tailwind-css </h3>
                </div>

                <div className='text-2xl text-center' data-aos="zoom-in">
                <TbBrandJavascript  size={150} 	 className='w-full text-center text-yellow-500		animate-pulse'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Javascript </h3>
                </div>

                <div className='text-2xl text-center mb-20 text-black'data-aos="zoom-in">
                <FaGithub  size={150} 	 className='w-full 		text-center text-black animate-bounce'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Git </h3>
                </div>

                <div className='text-2xl text-center' data-aos="zoom-in">
                <FaNodeJs size={150} 	 className='w-full 		text-center text-green-500 animate-pulse'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">NodeJs </h3>
                </div>

                <div className='text-2xl text-center'data-aos="zoom-in">
                <FaReact  size={150} color='cyan' className='w-full text-center  animate-bounce'/>
                <h3 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">React</h3>
                </div>


            </div>


        </div>

        {/* Skills section end*/}

        {/* About section start*/}
        <div className='bg-gradient-to-b from-neutral-400	 via-neutral-600 to-neutral-800 ' >
          <div className='text-center'>

          <h1 className='text-2xl font-bold text-center pt-8 pb-8 underline'data-aos="zoom-in">Hi, it's Dani. Welcome to my website.</h1>
          </div>


          <div className='text-center items-center mx-36 md:mx-5 shadow-xl shadow-black'>
            <div className='h-92	'>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_lxqurkjc.json"  background="transparent"  speed="1"    loops autoplay data-aos="zoom-in"></lottie-player>
            </div>
           <p className='text-xl text-white text-center' data-aos="zoom-in"> 
           My name is Daniel Madarasi.
            I am 26 years old.
            I first started as a machine operator, which was later replaced by a team leader.
            Continuously improving my knowledge, I became a Senior Team Leader.
            It was during this time that he started working on web development.
            After that, I applied for Frontend developer training, where I gained a lot of knowledge.
            In my free time I constantly improve my knowledge.
            I passed all of my listed Frontend Developer skills with a successful exam.
            I want to work in a Frontend Developer job and continuously build my knowledge to build a career.</p>
            </div>
            
        </div>
        {/*About section end*/}

        {/* Projects section start*/}
        <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400 pb-5 pr-5' >

          <h1 className='text-white text-center text-6xl pt-28 md:pt-32 pb-20' data-aos="flip-right">My Projects</h1>

          <h2 className='text-white text-center text-2xl pb-10' data-aos="flip-right">Projects are being prepared and submitted on an ongoing basis.</h2>
        <div className='grid md:grid-cols-2 grid-cols-6 text-white'>
          <div className='ml-3'>
                <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a >
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a >
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a >
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a >
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a >
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a >
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a >
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a >
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2> 
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a >
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a >
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
            <h2 className='text-white text-center pb-3'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="#">
                          <lottie-player  src="https://assets8.lottiefiles.com/packages/lf20_YZb2Qu.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">In progress </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">In progress </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          In progress
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>


            </div>
        </div>
        {/* Project section end*/}

        {/* Contact section start*/}

        <div className="bg-gradient-to-b from-neutral-400	 via-neutral-600 to-neutral-800 flex justify-center">

               <div className='md:w-full w-1/2 p-10  shadow-lg shadow-indigo-200	'>
                 
                    <h1 className='text-2xl text-white text-center font-semibold '>Contact me</h1>
                    <input type="text"  placeholder=' name' className='w-full border-2  border-gray-900 rounded-3xl py-1 text-center shadow-md shadow-gray-100 mt-5'/>
                    <input type="email" placeholder=' email' className='w-full border-2  border-gray-900 rounded-3xl py-2 text-center shadow-md shadow-gray-100 mt-5'/>
                    <textarea type="textarea" placeholder=' query' className='w-full border-2  border-gray-900 rounded-3xl text-center shadow-md shadow-gray-100 mt-5'/>
                    <div className='flex justify-center '>
                    <button className='border-2 mt-3 bg-red-800 text-white rounded-3xl hover:bg-red-600 px-5 py-1'>SUBMIT</button>
                    </div>
                </div>
                
           

            
          </div>

        {/* Contact section end*/}

      </div>
    </Layout>
  )
}

export default Home