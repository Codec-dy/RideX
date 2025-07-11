import Footer from '@/components/Footer'
import React from 'react'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
interface Layout1Props {
  children: React.ReactNode;
}

const Layout1: React.FC<Layout1Props> = ({children}) => {
  return (
   <>
    <div className='min-h-[100vh] p-4'>
        <Navbar />
        {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout1