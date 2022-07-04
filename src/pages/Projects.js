import React from 'react'
import Layout from '../components/Layout'

const Projects = () => {
  return (
    <Layout>
        <div className='w-100 '>
        <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800 pb-5 pr-3 ' >

          <h1 className='text-white text-center text-6xl pt-20 pb-20'>My Projects</h1>

          <h2 className='text-white text-center text-2xl pb-10'>Projects are being prepared and submitted on an ongoing basis.</h2>
          <div className='grid md:grid-cols-2 grid-cols-6 text-white '>
          <div className='ml-3'>
          <h2 className='text-white text-center pb-3'>Magic Card</h2>
                  <div class="max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 ">
                      <a className='h-2/4' href="https://magic-cards158.netlify.app/" target="_blank">
                          <img className="rounded-t-lg h-2/4	" src={require('../assets/project1.png')} alt="magic-cards" />
                      </a>
                      <div class="p-5 h-2/4 rounded-b-lg bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="https://magic-cards158.netlify.app/" target="_blank">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Magic Cards </h5>
                          </a>
                          <p class="mb-3 font-normal text-white dark:text-gray-400 text-sm">The cards can be called up by clicking.. </p>
                          <a href="https://magic-cards158.netlify.app/" target="_blank"  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          start demo
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
            </div>

            <div className='ml-3 '>
            <h2 className='text-white text-center pb-3'>Movie api - Bootstrap</h2>
                  <div class="max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500">
                      <a href="https://movie-api123.netlify.app/" target="_blank">
                      <img className="rounded-t-lg h-2/4	" src={require('../assets/project2.png')} alt="movie-app" />
                      </a>
                      <div class="p-5 rounded-b-lg h-2/4 bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-400">
                          <a href="https://movie-api123.netlify.app/" target="_blank">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Movie api </h5>
                          </a>
                          <p class="mb-3 font-normal  dark:text-gray-400 text-white text-sm	">The posters have been extracted from an API..</p>
                          <a href="https://movie-api123.netlify.app/" target="_blank" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          start demo
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

            </div>

  
  </div>
        </div>
    </Layout>
  )
}

export default Projects