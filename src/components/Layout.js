import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header />

        <div className="content inset-0 w-screen font-lob">
            {children}
        </div>

        <Footer />
    </div>
  )
}

export default Layout