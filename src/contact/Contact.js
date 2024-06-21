import React from 'react'
import SubNavBar from '../Layouts/SubNavBar'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'
import Copyrights from '../Layouts/Copyrights'
import Maps from '../Layouts/Maps'
import CotntactDetails from './CotntactDetails'


function Contact() {
  return (
    <div>
       <SubNavBar/>
       <NavBar/>
        <Maps/>
        <CotntactDetails/>
       <Footer/>
      <Copyrights/>
    </div>
  )
}

export default Contact