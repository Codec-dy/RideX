import React from 'react'
import { Details, websiteInfo } from '../assets/assets'

const Footer = () => {
  return (
    <div className='prata-regular text-left mt-10 bg-blue-900 text-white p-4'>
        
        <div className='flex flex-col py-3  justify-between sm:flex-row'>
            <div className='flex flex-col gap-2 px-3'>
              <a href='' className='font-semibold text-2xl'>About Us</a>
              <a href=''>Contact Us</a>
              <a href=''>Privacy Policy</a>
              <a href=''>Terms of Service</a>
            </div>
            <div className='flex flex-col gap-2 px-3'>
                <a href='' className='font-semibold text-2xl'>RideX Group</a>
                <a href=''>Our Partners</a>
                <a href=''>Community</a>
            </div>
            <div className='flex flex-col gap-2 px-3'>
              <a href='' className='font-semibold text-2xl'>Help</a>
              <a href=''>Customer Support</a>
              <a href=''>Technical Information</a>
              <a href=''>Data Protection</a>
              <a href=''>Legal</a>
            </div>
            <div className='flex flex-col gap-2 px-3'>
              <a href='' className='font-semibold text-2xl'>News Letter</a>
              <a href=''>Sign up for our newsletter</a>
            </div>
        </div>
        <div className='flex flex-col justify-between items-center border-y border-y-white p-3 '>
          <h1>Secure Payment</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 p-3'>
          <div className='flex flex-row gap-2'>
            Logos
            </div>
          <div>© 2025 Ridex Services</div>
        </div>
    </div>
  )
}

export default Footer