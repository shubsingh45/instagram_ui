import React from 'react'
import image from './ProfileCommponent/image.jpg'
const ShowUserToFollw = () => {
  return (
    <div className=' lg:block sm:hidden md:hidden hidden  w-[22%] fixed right-0'>
      <div className=" w-full mt-3">
        <div className=" flex justify-between w-full p-3">
          <span>Suggested for you</span>
          <span className=' cursor-pointer'>See All</span>
        </div>
        <div className=" flex items-center justify-between p-3">
          <div className=" flex gap-3">
            <div className="">
              <img src={image} alt="" className='  h-16 w-16 rounded-full' />
            </div>
            <div className=" flex flex-col">
              <span className=' font-semibold'>Virat_kholi</span>
              <span>followed by rohit</span>
            </div>

          </div>
          <div className="">
            <span className=' text-blue-500 cursor-pointer'>Follow</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowUserToFollw