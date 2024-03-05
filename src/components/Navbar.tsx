import Image from 'next/image'
import React from 'react'
import { CiMenuBurger } from "react-icons/ci";



const Navbar = () => {
  return (
    <nav className="container pt-6">
    <div className="flex justify-between items-center">
      <Image src="/logo.jpeg" width={70} height={70} alt="logo" />
      <ul className="md:flex gap-4 items-center font-semibold text-[14px] hidden text-violet-800">
        <li>Home</li>
        <li>About</li>
        <li>Food</li>
        <li>Dish</li>
        <li>Contact</li>
        <button className="bg-orange-600 text-violet-200 px-6 py-2 rounded-3xl">
          SignUp
        </button>
        <button className="bg-orange-600 text-violet-200 px-6 py-2 rounded-3xl">
          Login
        </button>
      </ul>

      <CiMenuBurger  className="md:hidden text-black" size={30} />
    </div>
  </nav>
  )
}

export default Navbar