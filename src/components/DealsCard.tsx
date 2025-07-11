import React from 'react'

interface DealsCardProps {
    img:string,
    type:string,
    price:string,
    destination:string,
    date:string,
}

const DealsCard:React.FC<DealsCardProps> = ({img,type,price,destination,date}) => {
  return (
    <div className='relative flex flex-col sm:flex-row rounded-xl gap-2 w-full shadow-2xl'>
        <div>
            <img src={img} alt="Deal" className='w-full sm:w-[100px] lg:w-[150px] h-[150px] object-cover sm:rounded-l-xl' />
        </div>
        <div className='flex flex-1 flex-row justify-between gap-6 p-3'>
            <div className='flex flex-col justify-between'>
                <p>{destination}</p>
                <p>from</p>
                <p>{price}</p>
                <p>{date}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <p>{type}</p>
                <p>go</p>
            </div>
        </div>
    </div>
  )
}

export default DealsCard