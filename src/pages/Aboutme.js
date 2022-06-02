import React from 'react'
import Layout from '../components/Layout'

const Aboutme = () => {
  return (
    <Layout>
        <div>
        <div className='bg-gradient-to-b from-neutral-400	 via-neutral-600 to-neutral-800 pt-20' >
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
        </div>
    </Layout>
  )
}

export default Aboutme