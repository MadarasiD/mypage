import React from 'react'
import Layout from '../components/Layout'



const Aboutme = () => {


  return (
    <Layout >
         <div>
          <div className='bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800 pt-24' >
          <div className='text-center'>

          <h1 className='text-2xl font-bold text-center text-white pb-4 underline' data-aos="zoom-out-left">Hi, it's Dani. Welcome to my website.</h1>

          <a href="cvmadarasid.pdf" download="Madarasi Daniel.pdf" target="_blank"><button className='bg-white border-red-900	 rounded-full p-2 border-2 hover:bg-red-800 hover:text-emerald-300	'><h3 className='text-xl text-bold underline'>Download my CV</h3></button></a>
          </div>


          <div className='text-center items-center mx-36 md:mx-5 shadow-xl shadow-black'>
            <div className='h-96	'>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_lxqurkjc.json"  background="transparent"  speed="1"    loops autoplay data-aos="zoom-in"></lottie-player>
            </div>
           <p className='text-l text-white text-center'data-aos="zoom-in"> 
            My name is Daniel Madarasi.
            I am 26 years old.
            I first started as a machine operator, which was later replaced by a team leader.
            Continuously improving my knowledge, I became a Senior Team Leader.
            It was during this time that he started working on web development.
            After that, I applied for Frontend developer training, where I gained a lot of knowledge.
            In my free time I constantly improve my knowledge.
            I passed all of my listed Frontend Developer skills with a successful exam.
            I want to work in a Frontend Developer job and continuously build my knowledge to build a career.
            </p>
            </div>
            
        </div>
          </div>

          
        
    </Layout>
  )
}

export default Aboutme