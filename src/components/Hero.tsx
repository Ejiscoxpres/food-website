import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative min-h-screen">
         <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/bg.jpg"
        width={1500}
        height={700}
        alt="hero_bg"
      />

        <Navbar />
      <div className="container h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff48] w-fit p-4">
          <p className="uppercase font-medium">Wide options of choice</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious <span className="text-orange-500">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, tantalizing flavour and taste.
            <br /> What is still holding you?
          </p>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            View More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero