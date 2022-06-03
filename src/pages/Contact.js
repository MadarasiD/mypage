import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
        <div>
        <div className="bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800">

              <div className="grid md:grid-cols-1 grid-cols-2 items-center ">

                <div className='font-bold text-center flex justify-center md:px-3 '>
                  
                  <div className='md:w-full w-1/2 p-10 shadow-lg shadow-indigo-200	'>
                      <h1 className='text-2xl text-white font-semibold '>Contact me</h1>
                      <input type="text"  placeholder='name' className='w-full border-2  border-gray-900 rounded-3xl py-1 shadow-md shadow-gray-100 mt-5'/>
                      <input type="email" placeholder='email' className='w-full border-2  border-gray-900 rounded-3xl py-1 shadow-md shadow-gray-100 mt-5'/>
                      <textarea type="text" placeholder='query' className='w-full border-2  border-gray-900 rounded-3xl py-1 shadow-md shadow-gray-100 mt-5'/>

                      <button className='border-2  bg-red-200 text-white rounded-3xl hover:bg-red-600 px-5 py-1'>SUBMIT</button>
                  </div>
                  
                </div>

                

                <div className='grid md:grid-cols-1 grid-cols-2 h-screen '>
                  <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>

              </div>

              </div>

            </div>
        
    </Layout>
  )
}

export default Contact