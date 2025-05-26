import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

import menuicon from "../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";


const Header = () => {
const [isOpen, setIsOpen] = useState(false)



  return (
    <>
    <header className=" relative flex justify-between items-center p-6 shadow-md bg-[#0A0A0A] text-[#C7C7C7] mx-auto">
    <h1 className="text-xl font-bold text-[#C7C7C7] font-inter md:mx-10 "><Link to="/"> Endurance Ighobue </Link></h1>
    <nav className="hidden md:flex font-inter gap-x-6 text-sm text-[#C7C7C7]">
  <a href="#projects" className="hover:text-[#D3E97A]">Work</a>
 <a href="#contact" className="hover:text-[#D3E97A]">About</a>
  < Link to="/AboutMe" className="hover:text-[#D3E97A]">Contact</Link>
</nav>

     {isOpen && (
  <nav className="absolute top-full left-0 w-full bg-[#0A0A0A] flex flex-col items-center space-y-4 p-4 shadow-lg z-50 md:hidden">
    
    <a href="#projects" className="hover:text-black hover:bg-[#D3E97A]">Work</a>
    <a href="#contact" className="hover:text-black hover:bg-[#D3E97A]">About</a>
    <Link to="/AboutMe" className="hover:text-black hover:bg-[#D3E97A]">Contact</Link>
    
  </nav>
)}
 
     <button   onClick={()=> setIsOpen(!isOpen)}    className=" md:hidden ">
     <img src={menuicon} alt="hamburgerIcon" /> 
   </button>

  </header>
    </>
     
  )
}

export default Header
