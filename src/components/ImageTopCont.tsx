import React from 'react'

interface ImageTopContProps {
  img: string;
  topCont?: React.ReactNode;
  bottomCont?: React.ReactNode;
}

const ImageTopCont: React.FC<ImageTopContProps> = ({ img,topCont,bottomCont }) => {
  return (
    <div style={{ height: "inherit" }} className='relative flex w-full flex-1'>
        {topCont && topCont}
        <img src={img} style={{ height: "inherit" }} alt="Image"  className="w-full max-h-full object-cover rounded-lg shadow-md" />
        {bottomCont && bottomCont}
    </div>
  )
}

export default ImageTopCont