import React from 'react'
import image  from './image.jpg'
const CommonCompo = () => {
  return (
    <div className=' w-full  min-h-screen '>
        <div className=" lg:grid-cols-4 grid grid-cols-3 gap-1 lg:grid ">
            <img src={image} alt="" className=' w-44 w-48 lg:w-48 lg:h-52  cursor-pointer md:h-56 md:w-56' />
            <img src={image} alt=""  className='w-44 w-48 lg:w-48 lg:h-52 cursor-pointer md:h-56 md:w-56'/>
            <img src={image} alt="" className=' w-44 w-48 lg:w-48 lg:h-52  cursor-pointer md:h-56 md:w-56' />
            <img src={image} alt=""  className='w-44 w-48 lg:w-48 lg:h-52 cursor-pointer md:h-56 md:w-56'/>
            <img src={image} alt="" className=' w-44 w-48 lg:w-48 lg:h-52  cursor-pointer md:h-56 md:w-56' />
            <img src={image} alt=""  className='w-44 w-48 lg:w-48 lg:h-52 cursor-pointer md:h-56 md:w-56'/>

        </div>

    </div>
  )
}

export default CommonCompo