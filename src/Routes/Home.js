import React from 'react'
import {Aboutus, Contact, Footer, Hero, Navbar, Services,} from '../Components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
