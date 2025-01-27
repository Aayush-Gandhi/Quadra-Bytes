import React from 'react'
import {AboutHero, Contact, Footer, Navbar} from '../Components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      
      <Contact />
      <Footer />
    </div>
  )
}
