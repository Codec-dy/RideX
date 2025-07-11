import React from 'react'

interface TabsCardProps {
  image: string;
  text: string;
}

const TabsCard: React.FC<TabsCardProps> = ({ image, text }) => {
  return (
    <div  onClick={()=>''} className='cursor-pointer p-3 border rounded-xl flex flex-row items-center'>
        <div><img src={image}/></div>
        <div>{text}</div>
    </div>
  )
}

export default TabsCard