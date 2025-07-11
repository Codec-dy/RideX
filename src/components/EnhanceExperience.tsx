import React from 'react'
import ImageTopCont from './ImageTopCont'

const EnhanceExperience = () => {
  return (
    <div>
        <h1 className='font-extrabold text-blue-800 text-2xl sm:text-4xl my-10'>Enhance Your Experience</h1>
    <div className='flex sm:flex-row flex-col gap-3'>
        <div className='flex-1 h-[400px] relative'>
            <ImageTopCont 
            img='/lounge.jpg'
            bottomCont={
                <div className='absolute w-full bottom-0 rounded-lg p-3 left-0 text-white bg-[#0000ff80]'>
                    <h1 className='text-2xl font-bold'>On trip Magazine</h1>
                    <p className='mt-2 text-sm'>Discover the best travel options tailored for you!</p>
                </div>
            }
            />
        </div>
        <div className='flex-1 h-[400px] relative'>
            <ImageTopCont 
            img='/onboardmenu.jpg'
            bottomCont={
                <div className='absolute w-full bottom-0 rounded-lg p-3 left-0 text-white bg-[#0000ff80]'>
                    <h1 className='text-2xl font-bold'>On trip Magazine</h1>
                    <p className='mt-2 text-sm'>Discover the best travel options tailored for you!</p>
                </div>
            }
            />
        </div>
        <div className='flex-1 h-[400px] relative'>
            <ImageTopCont 
            img='/enhanceValue.jpg'
            bottomCont={
                <div className='absolute w-full bottom-0 rounded-lg p-3 left-0 text-white bg-[#0000ff80]'>
                    <h1 className='text-2xl font-bold'>On trip Magazine</h1>
                    <p className='mt-2 text-sm'>Discover the best travel options tailored for you!</p>
                </div>
            }
            />
        </div>
    </div>
    </div>
  )
}

export default EnhanceExperience