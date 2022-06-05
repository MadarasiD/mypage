import React from 'react'
import Layout from '../components/Layout'

const Aboutme = () => {
  return (
    <Layout >
        
        

          <div className=" bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800 ">

            <div className='text-center  h-full relative'>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_MvFIQ6.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
            </div>

            

            <div className='absolute inset-0 flex flex-col items-center justify-center pt-80'>
              <div >
              <h1 className='text-4xl pt-60'>Hi, it's Dani. Welcome to my website</h1>
              
              <pre className='items-center pt-32'>
               My development studies at Frontend began in early 2020. I’ve always<br />been interested in websites, now I can finally immerse myself in it.<br />I haven’t worked in the profession yet, but I’ve done and learned a<br />lot of projects.
                I also like to work in a team, <br />but if I have to work alone, that’s not a problem. <br />I study in my free time, I am constantly <br />improving my existing knowledge.<br />
                I am open to learning new things and I love challenges.
                </pre>
              </div>
            </div>
            
            

          </div>
          

          
        
    </Layout>
  )
}

export default Aboutme