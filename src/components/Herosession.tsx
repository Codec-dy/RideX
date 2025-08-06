import React from 'react';
import Buttonv2 from './Buttonv2';

interface Props {
  head: string;
}

const HeroSession: React.FC<Props> = ({ head }) => {
  return (
    <div className="hero-session flex flex-col relative py-8 px-2 sm:px-0">
      {/* <div className='h-[300px]'>
        <img className='w-full h-full' src='https://cdn-cf.cms.flixbus.com/drupal-assets/2023-01/gh-hero-image-desktop.jpeg'/>
      </div> */}
      <div className="container bg-white flex flex-col rounded-lg p-6 w-full  shadow-xl self-center space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{head}</h2>
        <div className="flex flex-row gap-6 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="type" className="accent-blue-700" />
            <span className="text-gray-700 font-medium">Round trip</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="type" className="accent-blue-700" />
            <span className="text-gray-700 font-medium">One Way</span>
          </label>
        </div>
        <form className="flex flex-col gap-4 md:flex-row md:gap-6 items-stretch text-sm text-gray-500">
          <div className="flex flex-col flex-1">
            <label className="mb-1 font-semibold text-gray-700">From</label>
            <input type="text" className="border rounded-md p-2 text-gray-800 focus:outline-blue-700" placeholder="From" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="mb-1 font-semibold text-gray-700">To</label>
            <input type="text" className="border rounded-md p-2 text-gray-800 focus:outline-blue-700" placeholder="To" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="mb-1 font-semibold text-gray-700">Departure</label>
            <input type="date" className="border rounded-md p-2 text-gray-800 focus:outline-blue-700" placeholder="Date" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="mb-1 font-semibold text-gray-700">Passengers</label>
            <input type="number" min={1} className="border rounded-md p-2 text-gray-800 focus:outline-blue-700" placeholder="1" />
          </div>
          <div className="flex items-end">
            <Buttonv2 text={"Submit"} perform={''} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSession;