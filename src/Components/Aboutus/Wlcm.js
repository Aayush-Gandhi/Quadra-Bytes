import React from 'react'

export default function Wlcm() {
  return (
    <div className='max-h-[750px] my-[108px] m-auto flex justify-around'>
      <div className='flex w-[1520px] justify-between items-center'>
        <div className='w-[690px] h-[534px]'>
            <img src="Images/AboutUs/About.jpg" alt="" />
        </div>
        <div className='w-[746px] h-[467px] flex flex-col justify-between'>
            <div className='text-[#38B6FF] font-title text-2xl'>ABOUT US</div>
            <div className='text-5xl font-medium font-anton'>WELCOME TO <span className='text-[#38B6FF]'> QUADRA BYTES </span> </div>
            <div className='font-title font-medium'>In a world driven by constant change, we thrive on adaptability and continuously push the boundaries of what is possible.</div>
            <div className='font-title font-light'>At Quadra Bytes, we're not just adapting to change — we're driving it. In a world where technology evolves at lightning speed, we thrive on pushing the boundaries of what's possible. Welcome to the forefront of innovation, where your digital aspirations meet reality.</div>
            <button className='border-2 rounded-md px-4 py-2 border-[#38B6FF] bg-[#38B6FF] text-white w-[218px]'>Read More</button>
        </div>
      </div>
    </div>
  )
}
