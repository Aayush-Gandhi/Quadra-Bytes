import React from 'react'

export default function ContactHero() {
  return (
    <div className="relative h-screen">
      <img src="/Images/Home/Hero.jpg" loading="eager" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl font-bold font-sans">Contact Us</h1>
      </div>
    </div>
  )
}
