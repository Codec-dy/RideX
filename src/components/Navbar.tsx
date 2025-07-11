import React, { useState } from 'react'
import {assets, Details} from '../assets/assets'
import Image from 'next/image';

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const [active, setActive] = useState("Home");
  return (
    <div className='relative w-full flex justify-between items-center text-white px-4 mb-10 z-20'>
        {/* ----------logo section---------- */}
        <div className='flex flex-1 items-center gap-2'>
            {/* <img src={assets.logo} alt='logo' className='text-grey-100' /> */}
            <p className=' text-xl font-bold'>{Details.whosePortfolio}</p>
        </div>
        

        {/* ------------links section--------- */}
        <Image onClick={()=>setVisible(true)} src={assets.menu_icon} alt='menu' className='sm:hidden w-10'/>
        <div className={`fixed sm:justify-between z-10 bg-black text-white top-0 h-screen sm:relative right-0 w-0 sm:bg-inherit sm:text-white font-semibold sm:h-auto sm:w-fit overflow-hidden flex flex-col flex-2 sm:flex-row prata-regular items-center gap-5  ${visible? "w-screen":"w-0"} sm:gap-10`}>
            <div onClick={()=>setVisible(false)} className={`w-full flex cursor-pointer items-center gap-4 p-3 ${visible? "block":"hidden"}`}>
                <Image className='h-4 rotate-180' src={assets.dropdown_icon} alt=''/>
                <p>Back</p> 
            </div>
          <div className='flex flex-col sm:flex-row items-center  gap-3' > 
            <a onClick={()=>{setVisible(false);setActive("Home")}} href='/dashboard/home' className={`${active==="Home"?"border-b":""}`}>Plan & Book</a>
            <a onClick={()=>{setVisible(false);setActive("About")}} href='/about' className={`${active==="About"?"border-b":""}`}>Manage Booking</a>
            <a onClick={()=>{setVisible(false);setActive("Contact")}} href='/contact' className={`${active==="Contact"?"border-b":""}`}>Contact Us</a>
         </div>
         <div className='flex flex-row items-center'>
            <select className='bg-transparent border border-gray-500 text-gray-500 p-2 rounded-md mr-4'>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
            </select>
            <a href='/auth/login'><img src='/account_circle.png' /></a>
        </div>
        </div>

       
    </div>
  )
}

export default Navbar