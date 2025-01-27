import React from 'react'
import {AboutHero, Contact, Footer, Navbar, Us, Wlcm} from '../Components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Wlcm />  
      <Us />
      
      <Contact />
      <Footer />
    </div>
  )
}
