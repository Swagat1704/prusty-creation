import React from 'react'
import{Link} from 'react-router-dom'
import{HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight} from 'react-icons/hi2'
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'


function Navbar() {
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/* logo */}
         <div>
            <Link to={"/"} className='text-2xl font-medium text-[black]'>Prusty Creation
            </Link>
         </div>
         {/* Center-Navigation Links*/}
         <div className='hidden md:flex space-x-6'>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Phone Skins
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
             Phone Covers
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Laptop Skins
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Accesories Skins
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Camera Skins
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Laptop Covers
          </Link>
          
         </div>
         {/* Right-Navigation Links*/}
         <div className="flex items-center space-x-4">
          <Link to="/profile" className='hover:text-black '>
            <HiOutlineUser className='h-6 w-6 text-gray-700' />
          </Link>
          <button className='relative hover:text-black'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
            <span className='absolute -top-1 bg-primary text-[white] text-xs rounded-full px-2 py-0.5'>4</span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
          <Searchbar/>
          </div>
          
          <button className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'></HiBars3BottomRight>
          </button>
         </div>
      </nav>
      <CartDrawer/>
    </>
  )
}

export default Navbar
