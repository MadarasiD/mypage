import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
    
      <div className="bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800 flex justify-center h-full pt-24">

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

    
        
    </Layout>
  )
}

export default Contact