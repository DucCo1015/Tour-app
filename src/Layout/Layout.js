import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Routers from '../routers/Routers.js'

const Layout = () => {
  return <>
    <Header />
    <div>
      <Routers />
    </div>
    <Footer />
  </>
}

export default Layout