import React from 'react'

const Booking = () => {
  return (
    <div className='relative flex flex-col rounded-lg shadow-lg p-5 gap-5 bg-white z-2'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
            <select className='border border-gray-300 rounded-lg p-2 w-full max-w-md'>
                <option value="roundtrip">Round trip</option>
                <option value="oneway">One way</option>
                <option value="multicity">Multi-city</option>
            </select>
            <select className='border border-gray-300 rounded-lg p-2 w-full max-w-md'>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="firstclass">First Class</option>
            </select>
        </div>
        <div className='flex flex-col gap-1'>
            <label className='text-gray-700'>Origin</label>
            <input type="text" className='border border-gray-300 rounded-lg p-2 w-full' placeholder='Enter origin' />
        </div>
        <div className='flex flex-col gap-1'>
            <label className='text-gray-700'>Destination</label>
            <input type="text" className='border border-gray-300 rounded-lg p-2 w-full' placeholder='Enter origin' />
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-3 w-full'>
            <div className='flex flex-col gap-1 w-full'>
                <label className='text-gray-700'>Departure Date</label>
                <input type="date" className='border border-gray-300 rounded-lg p-2 w-full' />
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label className='text-gray-700'>Return Date</label>
                <input type="date" className='border border-gray-300 rounded-lg p-2 w-full' />
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <label className='text-gray-700'>Passengers</label>
            <input type="number" min="1" className='border border-gray-300 rounded-lg p-2 w-full max-w-md' placeholder='Enter number of passengers' />
          </div>  
        <button className='bg-blue-600 text-white rounded-lg p-3 w-full max-w-md hover:bg-blue-700 transition duration-200'>
            Search Flights
        </button>
    </div>
  )
}

export default Booking