import ButtonwImage from '@/components/ButtonwImage';
import DashboardLayout from '@/Layout/DashboardLayout';
import HeroSession from '@/components/Herosession';
import ImageTitleTextC from '@/components/ImageTitleTextC';
import React from 'react';

const bus: React.FC = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <HeroSession head={"Affordable Bus Travel"}/>
                <div className='flex flex-col gap-10 max-w-[840px] self-center w-full'>
                <div className='flex flex-col sm:flex-row self-center gap-3  w-full'>
                    <ButtonwImage text='Manage My Booking' imageSrc='' className='p-4 px-14 w-full border rouded-sm text-xs text-gray-400 cursor-pointer hover:shadow-lg'/>
                    <ButtonwImage text='Track Your Trip' imageSrc='' className='p-4 px-14 border w-full rouded-sm text-xs text-gray-400 cursor-pointer hover:shadow-lg'/>
                    <ButtonwImage text='Help' imageSrc='' className='p-4 px-14 border rouded-sm text-xs w-full text-gray-400 cursor-pointer hover:shadow-lg'/>
                </div>
                <span className='border w-full border-gray-300'></span>
                <div className='flex flex-col sm:flex-row self-center gap-3  w-full'>
                    <ImageTitleTextC imageSrc='' title='More travel options' text='You now can select from more schedules across U.S., Mexico and Canada with Greyhound and FlixBus.'/>
                    <ImageTitleTextC imageSrc='' title='Reserve a Seat' text='Reserve your favorite seat when you book your ticket.'/>
                    <ImageTitleTextC imageSrc='' title='Need to make a change?' text='Easily change your ticket or add bags with Manage My Booking.'/>
                </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default bus;