import React from 'react'
import ImageTopCont from './ImageTopCont'
import Button from './Button'



const Hero = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-0'>
        <div className='flex max-h-[400px]'>
        <ImageTopCont 
            img='/feature_flight.jpg'
            topCont={
                <div className='absolute top-[40%] left-10 text-white'>
                    <h1 className='text-4xl font-bold'>Welcome to RideX</h1>
                    <p className='mt-2'>Explore the world with us!</p>
                </div>
            }
            />
        </div>

    </div>
  )
}

export default Hero