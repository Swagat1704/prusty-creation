import React from 'react'
import {TbBrandMeta } from 'react-icons/tb'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




function Topbar() {
  return (
    <div className='bg-primary text-[white]' >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className='hidden md:flex items-center space-x-4'>
          <a href="#" className='hover:text-gray-300'>
            <TbBrandMeta className='h-5  w-5'></TbBrandMeta>
          </a>
          <a href="#" className='hover:text-gray-300'>
          <FaInstagram  className='h-4  w-4'></FaInstagram>
          </a>
          <a href="#" className='hover:text-gray-300'>
            <FaWhatsapp className='h-4 w-4'></FaWhatsapp>
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship india wide-Fast and reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+91" className='hover-text-gray-300'>+91 1234567890</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
