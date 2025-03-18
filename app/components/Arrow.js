import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Arrow = () => {
  return (
    <div className='absolute bottom-1 -translate-1/2 left-[50%] flex flex-col justify-center items-center '>
      <MdKeyboardDoubleArrowDown className='scroll' color='white' size={20} />
      <p className='text-white text-xs'>Scroll down</p>
    </div>
  )
}

export default Arrow
