import React from 'react'
import { FaAd, FaPlus, FaUserCircle } from 'react-icons/fa'
import image from './AllPages.js/image.jpg'
import { useSelector } from 'react-redux'
const StorySection = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
        <div className=" flex gap-2  w-full p-3 ">
        <div className="    rounded-full">
            <img src={currentUser.profilePicture} alt="" className=' h-16 w-16 rounded-full border-red-500 border-2 cursor-pointer' />
            <FaPlus className=' h-6 w-6 ml-10 -mt-6 cursor-pointer'/>
            <span className=' text-xs'>Your story</span>
        </div>
        <div className="    rounded-full ">
            <img src={image} alt="" className=' h-16 w-16 rounded-full border-red-500 border-2 cursor-pointer' />
        </div>
                <div className="    rounded-full">
            <img src={image} alt="" className='  h-16 w-16 rounded-full border-red-500 border-2 cursor-pointer' />
        </div>


</div>


  )
}

export default StorySection