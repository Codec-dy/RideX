import React from 'react'

const Buttonv2 = ({text, perform}) => {
  return (
    <div onClick={()=>perform?perform():''} className='cursor-pointer bg-gray-900 w-full py-2 px-10 text-gray-100 hover:bg-white text-center rounded-3xl hover:text-black hover:border transition-all duration-[500ms]'>{text}</div>
  )
}

export default Buttonv2