import React from 'react'
import image from '../Pages.js/image.jpg'
import { useSelector } from 'react-redux'
const HighLightStory = () => {
  const { currentUser } = useSelector(state => state.user)

  return (
    <div className=' w-full  mt-3'>
        <div className="profile flex  flex-row overflow-x-auto gap-2 justify-center">
            <div className=" flex flex-col items-center">
            <img src={currentUser.profilePicture} alt="profile pic"
              className="border-4 border-teal-500 shrink-100 rounded-full shadow-lg cursor-pointer hover:border-gray-200 w-[80px]  h-[80px]"/>
              <span>my story</span>
            </div>
            <div className=" flex flex-col items-center">
            <img src={image} alt="profile pic"
              className="border-4 border-teal-500 shrink-100 rounded-full shadow-lg cursor-pointer hover:border-gray-200 w-[80px]  h-[80px]"/>
              <span>my story</span>
            </div>

         
            <div className=" flex flex-col items-center">
            <img src={image} alt="profile pic"
              className="border-4 border-teal-500 shrink-100 rounded-full shadow-lg cursor-pointer hover:border-gray-200 w-[80px]  h-[80px]"/>
              <span>my story</span>
            </div>
            <div className=" flex flex-col items-center justify-center border-2 border-teal-500 w-[76px]  rounded-full h-[80px] cursor-pointer ">
              <span>View all</span>
            </div>



        </div>
    </div>
  )
}

export default HighLightStory