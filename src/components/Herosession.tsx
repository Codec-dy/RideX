import React from 'react';
import Buttonv2 from './Buttonv2';

interface Props{
    head:string,
}

const HeroSession: React.FC<Props> = ({head}) => {
    return (
        <div className="hero-session flex flex-col h-[370px] relative">
            <div className='h-[300px]'>
                <img className='w-full h-full' src='https://cdn-cf.cms.flixbus.com/drupal-assets/2023-01/gh-hero-image-desktop.jpeg'/>
            </div>
            <div className="container bg-white flex flex-col rounded-xs p-3 w-full max-w-[840px] shadow-lg self-center translate-y-[-50%]">
                <div className='flex flex-row gap-2'>
                    <input type="radio" name="type"/><span>One Way</span>
                    <input type="radio" name="type"/><span>One Way</span>
                </div>
                <div className='flex flex-row gap-2 items-end text-sm text-gray-500'>
                    <div className='flex flex-col'>
                        <p>From</p>
                        <input type="text" className='border rounded-sm p-1 text-gray-800' placeholder='From' />
                    </div>
                    <div className='flex flex-col'>
                        <p>To</p>
                        <input type="text" className='border rounded-sm p-1 text-gray-800' placeholder='To' />
                    </div>
                    <div className='flex flex-col'>
                        <p>Departure</p>
                        <input type="date" className='border rounded-sm p-1  text-gray-800' placeholder='Date' />
                    </div>
                    <div className='flex flex-col'>
                        <p>Passengers</p>
                        <input type="number" className='border rounded-sm p-1 text-gray-800' placeholder='1' />
                    </div>
                    <div>
                        {/* <span>d</span> */}
                        <Buttonv2 text={"Submit"} perform={''}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSession;