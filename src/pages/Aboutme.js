import React from 'react'
import Layout from '../components/Layout'

const Aboutme = () => {
  return (
    <Layout>
        <div>
        <div className="h-screen bg-gradient-to-b from-neutral-800	 via-neutral-600 to-neutral-800 pt-20">

          <div className="grid md:grid-cols-1 grid-cols-2 items-center transfrom transition skew-y-12 md:skew-y-0 ">

            <div className='font-bold 	 text-center justify-center md:px-3 '>
              <h1 className='text-4xl  text-emerald-700	md:text-2xl md:pt-32 animate-pulse tarnsform transition-all animate-bounce '>
                Hi, my name is<br /> <b className='text-emerald-400	text-5xl '>
                
                  Madarasi Dániel</b></h1>
                  
              
              <h1 className='text-3xl  text-teal-500	ms:text-xl tarnsform transition-all animate-bounce'>
                  Frontend <b className='text-red-600'>Developer</b>
              </h1>
            </div>

            <div id="parallax">

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


            <div className='grid md:grid-cols-1  grid-cols-2 h-screen '>
              <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

          </div>

          </div>
        </div>
    </Layout>
  )
}

export default Aboutme