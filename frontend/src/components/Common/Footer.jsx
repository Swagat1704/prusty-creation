import React from 'react'
import{Link} from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram,IoLogoYoutube } from 'react-icons/io'
import{FiPhoneCall} from 'react-icons/fi'
import { PiYoutubeLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <footer className="border-t py-12">
        <div className="container mx-20 grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 ">
            <div >
            <h3 className='text-lg text-gray-800 mb-4'>NewsLetter</h3>
            <p className='text-gray-500 mb-4'>
                Be the first to hear about are new products,exclusive events,and online offers.
            </p>
            <p className='font-medium text-sm text-gray-600 mb-6'>
                Sign up and get 10% off your first order
            </p>

            {/* Newsletter form */}
            <form className='flex'>
                <input type="email" placeholder="Enter your email address" className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' required/>
                <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>
                    Subscribe
                </button>
            </form>
            </div>

            {/* shop links */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Phone skins</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Phone covers</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Laptop Skins</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Laptop Covers</Link>
                    </li>
                </ul>
            </div>
            {/* shop links */}
            <div>
            <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">About Us</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">FAQs</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Features</Link>
                    </li>
                </ul>
            </div>
            {/* follow us */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    
                    <a href="#" target='_blank'rel='noopener noreferrer'className='hover:text-gray-500'>
                        <TbBrandMeta className='h-5 w-5'></TbBrandMeta>
                        </a>
                        <a href="#" target='_blank'rel='noopener noreferrer'className='hover:text-gray-500'>
                        <IoLogoInstagram className='h-5 w-5'></IoLogoInstagram>
                        </a>
                        <a href="#" target='_blank'rel='noopener noreferrer'className='hover:text-gray-500'>
                        <PiYoutubeLogoLight className='h-5 w-5'></PiYoutubeLogoLight>
                        </a>
                        
                    
                </div>
                <p className='text-gray-500'>Call Us</p>
                <p>
                    <FiPhoneCall className='inline-block mr-2'></FiPhoneCall>
                    1234567890
                </p>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>&copy; 2025 Prusty Creation. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer