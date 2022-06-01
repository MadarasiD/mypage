import React from 'react'
import Layout from '../components/Layout';
import '../styles/Home.css'
import {FaHtml5, FaCss3, FaReact, FaBootstrap, FaSass, FaGithub, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
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


        {/* Skills section*/}

        <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400'>
        
        <h1 className='text-6xl p-10  text-center underline text-white'>The web development technologies I use</h1>
        
            <div className='grid md:grid-cols-2 grid-cols-5 text-white'>

             

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

                <div className='text-2xl text-center mb-20 text-black'>
                <FaGithub  size={150} 	 className='w-full 		text-center text-black animate-bounce'/>
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

        {/* About section*/}

        <div className='bg-gradient-to-b from-neutral-400	 via-neutral-600 to-neutral-800 ' >
          <div className='text-center'>

          <h1 className='text-2xl font-bold text-center pb-4'>Hi, it's Dani. Welcome to my website.</h1>
          </div>


          <div className='text-center items-center mx-36 md:mx-5 shadow-xl shadow-black'>
            <div className='h-96	'>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_lxqurkjc.json"  background="transparent"  speed="1"    loops autoplay></lottie-player>
            </div>
           <p className='text-xl text-white text-center'> My development studies at Frontend began in early 2020. I’ve always been interested in websites, now I can finally immerse myself in it. I haven’t worked in the profession yet, but I’ve done and learned a lot of projects.
            I also like to work in a team, but if I have to work alone, that’s not a problem. I study in my free time, I am constantly improving my existing knowledge.
            I am open to learning new things and I love challenges.</p>
            </div>
            
        </div>

        {/* Projects section */}
        <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400 pb-5' >

          <h1 className='text-white text-center text-6xl pt-20 pb-20'>My Projects</h1>
        <div className='grid md:grid-cols-2 grid-cols-6 text-white'>
          <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3'>
                <h2 className='text-white'>This is my first project</h2>
                  <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here </p>
                          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home