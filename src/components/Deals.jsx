import React from 'react'
import DealsCard from './DealsCard'
const Deals = () => {
  return (
    <div>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='font-extrabold text-blue-800 text-2xl sm:text-4xl my-10'>Other Destinations</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="destination" className='text-gray-700'>Select Origin</label>
                <select className='border border-gray-300 rounded-lg p-2'>
                    <option value="johannesburg">Johannesburg</option>
                    <option value="cape-town">Cape Town</option>
                    <option value="Accra">Accra</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nairobi">Nairobi</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-5'>
            <div className='flex w-full flex-col gap-5'>
                <DealsCard 
                    img='/boat.jpg'
                    destination='Windhoek'
                    price="$100"
                    date='August 20, 2025'
                    type='One Way'
                />
                <DealsCard 
                    img='/boat.jpg'
                    destination='Windhoek'
                    price="$100"
                    date='August 20, 2025'
                    type='One Way'
                />
                <DealsCard 
                    img='/boat.jpg'
                    destination='Windhoek'
                    price="$100"
                    date='August 20, 2025'
                    type='One Way'
                />
            </div>
            <div className='flex w-full flex-col gap-5 items-end'>
                <DealsCard 
                    img='/boat.jpg'
                    destination='Windhoek'
                    price="$100"
                    date='August 20, 2025'
                    type='One Way'
                />
                <DealsCard 
                    img='/boat.jpg'
                    destination='Windhoek'
                    price="$100"
                    date='August 20, 2025'
                    type='One Way'
                />
                <DealsCard 
                    img='/boat.jpg'
                    destination='Windhoek'
                    price="$100"
                    date='August 20, 2025'
                    type='One Way'
                />
            </div>
            
        </div>
    </div>
  )
}

export default Deals