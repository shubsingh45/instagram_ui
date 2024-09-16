import React from 'react'
import image from './image.jpg'
import {  HiOutlineCamera } from 'react-icons/hi'
import {Link} from 'react-router-dom'
const PrimarySection = () => {
  const username = 'Instagram user'
  return (
    <div className=" flex flex-col gap-3 min-h-screen w-[100%] ">
    <div className='  justify-between flex items-center'>
        <Link  to={`/usermessagepage/${username}`}
        className=" flex flex-row items-center  gap-20 w-full">
        <img src={image} alt="" className='  h-16 w-16 rounded-full'/>
        <span>{username}</span>
        </Link>
        <HiOutlineCamera className=' w-10 h-7 cursor-pointer'/>
    </div>



    </div>
  )
}


const GenaralSection = () => {
    return (
      <div>GenaralSection</div>
    )
  }
  
  const ChannelSection = () => {
    return (
      <div>ChannelSection</div>
    )
  }
  
  const RequestSection = () => {
    return (
      <div>RequestSection</div>
    )
  }

  export {
    PrimarySection, GenaralSection, ChannelSection, RequestSection
  }
  
      