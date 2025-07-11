import React from 'react'
import ImageTopCont from './ImageTopCont'



const DiscoverMore = () => {
  return (
    <div>
        <h1 className='font-extrabold text-blue-800 text-2xl sm:text-4xl my-10'>Discover More</h1>
    <div className='flex sm:flex-row flex-col gap-3 min-h-[60vh] sm:max-h-[500px]'>
        <div className='flex flex-1 relative'>
        <ImageTopCont 
        img='/featured_bus.jpg'
        bottomCont={
            <div className='absolute bottom-0 rounded-lg p-3 left-0 text-white bg-[#0000ff80]'>
                <h1 className='text-2xl font-bold'>On trip Magazine</h1>
                <p className='mt-2 text-sm'>Discover the best travel options tailored for you!</p>
            </div>
        }
        />
        </div>
        <div className='flex flex-1 flex-col items-center justify-center gap-3 max-h-full'>
            <div className='flex flex-1  max-h-1/2 relative'>
                <ImageTopCont 
            img='/boat.jpg'
            bottomCont={
                <div className='absolute bottom-0 rounded-lg p-3 left-0 text-white bg-[#0000ff80]'>
                    <h1 className='text-2xl font-bold'>On trip Magazine</h1>
                    <p className='mt-2 text-sm'>Discover the best travel options tailored for you!</p>
                </div>
            }
            />
            </div>
            <div className='flex max-h-1/2 flex-1 relative'>
                <ImageTopCont 
            img='/train.jpg'
            bottomCont={
                <div className='absolute bottom-0 rounded-lg p-3 left-0 text-white bg-[#0000ff80]'>
                    <h1 className='text-2xl font-bold'>On trip Magazine</h1>
                    <p className='mt-2 text-sm'>Discover the best travel options tailored for you!</p>
                </div>
            }
            />
            </div>
            
                
            
        </div>
    </div>
    </div>
  )
}

export default DiscoverMore