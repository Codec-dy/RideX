import React from 'react';
import Link from 'next/link';

interface Props {
  setbooking: (type: string ) => void;
}

const MiniNav: React.FC<Props> = ({ setbooking }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between justify-self-center w-full max-w-[1120px]">
      <div className="flex space-x-8">
        <Link href="" onClick={()=>{setbooking("flight")}} className="text-blue-900 hover:text-blue-600 font-medium">
          Flight
        </Link>
        <Link href="" onClick={()=>{setbooking("bus")}} className="text-blue-900 hover:text-blue-600 font-medium">
          Bus
        </Link>
        <Link href="" onClick={()=>{setbooking("train")}} className="text-blue-900 hover:text-blue-600 font-medium">
          Train
        </Link>
        <Link href="" onClick={()=>{setbooking("rental")}} className="text-blue-900 hover:text-blue-600 font-medium">
          Rentals
        </Link>
      </div>
    </nav>
  );
};

export default MiniNav;
