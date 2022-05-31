import React from 'react'
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div >
        <div className="h-screen bg-zinc-700	">

          <div className="grid md:grid-cols-1 grid-cols-2">

            <div>

            </div>

            <div className='grid md:grid-cols-1 grid-cols-2 h-screen'>
              <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Home