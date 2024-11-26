import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
        {/* Center Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="tel:+12124567890" className='hover:text-black'>+1-212-456-7890</a></li>
            <li><a href="mailto:greatstackdev@gmail.com" className='hover:text-black'>greatstackdev@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright © 2024 Hardik_Gahlot - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
