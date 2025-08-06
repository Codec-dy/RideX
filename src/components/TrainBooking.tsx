import React from 'react';
import HeroSession from './Herosession';
import ButtonwImage from './ButtonwImage';
import ImageTitleTextC from './ImageTitleTextC';

const TrainBooking = () => {
  return (
    <div className='flex flex-col gap-4  max-w-[1120px]'>
      <HeroSession head={"Book Cheap Train Tickets"} />
      <div className='flex flex-col gap-10 self-center w-full'>
        <div className='flex flex-col sm:flex-row self-center gap-3 w-full'>
          <ButtonwImage
            text='Manage My Booking'
            imageSrc=''
            className='p-4 px-14 w-full border rounded-sm text-xs text-gray-400 cursor-pointer hover:shadow-lg'
          />
          <ButtonwImage
            text='Train Status'
            imageSrc=''
            className='p-4 px-14 border w-full rounded-sm text-xs text-gray-400 cursor-pointer hover:shadow-lg'
          />
          <ButtonwImage
            text='Help'
            imageSrc=''
            className='p-4 px-14 border rounded-sm text-xs w-full text-gray-400 cursor-pointer hover:shadow-lg'
          />
        </div>
        <span className='border w-full border-gray-300'></span>
        <div className='flex flex-col sm:flex-row self-center gap-3 w-full'>
          <ImageTitleTextC
            imageSrc=''
            title='Flexible Dates'
            text='Find the best train fares by searching with flexible dates.'
          />
          <ImageTitleTextC
            imageSrc=''
            title='Seat Selection'
            text='Choose your preferred seat easily during booking.'
          />
          <ImageTitleTextC
            imageSrc=''
            title='24/7 Support'
            text='Get help anytime with our dedicated support team.'
          />
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;