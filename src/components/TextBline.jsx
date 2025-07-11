import React from 'react'

const TextBline = ({text}) => {
  return (
    <div className='flex items-center'>
        <span className="bg-gray-300 flex-1 h-[1px]"></span>
        <span className='px-2'>{text}</span>
        <span className="bg-gray-300 flex-1 h-[1px]"></span>
    </div>
  )
}

export default TextBline