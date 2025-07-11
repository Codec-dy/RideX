import React from 'react'

const Button = ({text, perform}) => {
  return (
    <div onClick={()=>perform()} className='cursor-pointer bg-gray-900 max-w-fit py-2 px-10 text-gray-100 hover:bg-white text-center hover:text-black hover:border transition-all duration-[500ms]'>{text}</div>
  )
}

export default Button