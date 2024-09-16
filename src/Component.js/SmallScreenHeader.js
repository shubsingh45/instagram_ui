import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaHome, FaListUl, FaSearch, FaVideo } from 'react-icons/fa'
import { HiOutlineChat, HiOutlineHeart, HiOutlinePlusCircle, HiUser } from 'react-icons/hi'
import instslogo from '../instalogo.png'
import { Link } from 'react-router-dom'
import { LikeComponent, NotificationComponent } from './AllPages.js/OtherComponents';

const SmallScreenHeader = () => {
  const [profile, setProfile] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showHomeHeader, setShowHomeHeader] = useState(true)
  const [showReelsHead, setShowReelsHead] = useState(false)
  const [showProfileHead, setShowProfileHead] = useState(false)
  const [showPostHead, setShowPostHead] = useState(false)
  const [showNoti, setShowNoti] = useState(false)
  const [showLikeNoti, setShowLikeNoti] = useState(false)
  const [footer, setFooter] = useState(true)

  const handelNotification = () => {
    setShowNoti(true)
    setShowSearch(false)
    setShowLikeNoti(false)
  }
  const handelLikeNotifi = () => {
    setShowLikeNoti(true)
    setShowNoti(false)
    setShowSearch(false)
  }
  const handelSearchIcon = () => {
    setShowSearch(true)
    setShowPostHead(true)
    setShowReelsHead(true)
    setShowProfileHead(true)
    setShowHomeHeader(false)
  }
  const handelHome = () => {
    setShowHomeHeader(true)
    setShowSearch(false)
    setShowPostHead(false)
    setShowReelsHead(false)
    setShowProfileHead(false)
    setFooter(true)
  }
  
  const handelProfile = () => {
    setShowHomeHeader(false)
    setShowSearch(false)
    setShowPostHead(false)
    setShowReelsHead(false)
    setShowProfileHead(false)
    setFooter(false)
   setProfile(true)
  }



  return (
    <div className=' bg-white lg:hidden md:hidden sm:block   w-full '>

      {
        showHomeHeader && (
          <div className=" flex w-full justify-between h-12 items-center border-b-2  bg-white">
            <div className="">
              <img src={instslogo} alt="" className=' w-28 ml-3' />
            </div>
            <div className=" flex flex-row gap-8 mr-3">
              <Link to={'/message'}><HiOutlineHeart className=' w-10 h-7 cursor-pointer' onClick={handelLikeNotifi} /></Link>
              <Link to={'/notification'}><HiOutlineChat className=' w-10 h-7 cursor-pointer' onClick={handelNotification} /></Link>
            </div>
          </div>

        )
      }
      {
        showNoti && (
          <div className="">
            <div className=" flex justify-between h-12 items-center border-b-2  bg-white
             lg:hidden md:hidden sm:block  fixed top-0 z-50 w-full">
              <div className=" flex items-center gap-5 ml-2">
                <Link to={'/'}><FaArrowLeft className=' w-5 h-16 cursor-pointer' onClick={() => setShowNoti(false)} /></Link>
                <span className=' text-lg font-semibold'>Notifications</span>
              </div>
            </div>
            <NotificationComponent />
          </div>

        )
      }
      {
        showLikeNoti && (
          <div className="">
            <div className=" flex justify-between h-12 items-center border-b-2   bg-white lg:hidden md:hidden sm:block  fixed top-0 z-50 w-full">
              <div className=" flex items-center gap-5 ml-2">
                <Link to={'/'}><FaArrowLeft className=' w-5 h-16 cursor-pointer' onClick={() => setShowLikeNoti(false)} /></Link>
                <span className=' text-lg font-semibold'>Messages</span>
              </div>
            </div>
            <LikeComponent />
          </div>

        )
      }

      {showSearch && ('')}
      {showPostHead && ('')}
      {showReelsHead && ('')}
      {showProfileHead && ('')}

 {
  profile && ''}

                  <div className=" flex fixed bottom-0 justify-between w-full items-center bg-white h-10">
                    <Link to={'/'}> <FaHome className=' w-10 h-5 cursor-pointer' onClick={handelHome} /></Link>
                    <Link to={'/search'}> <FaSearch className=' w-10 h-5 cursor-pointer' onClick={handelSearchIcon} /></Link>
                    <Link to={'/create'}><HiOutlinePlusCircle className=' w-10 h-7 cursor-pointer' onClick={handelSearchIcon} /></Link>
                    <Link to={'/reels'}><FaVideo className=' w-10 h-5 cursor-pointer' onClick={handelSearchIcon} /></Link>
                    <Link to={'/profile'}><HiUser className=' w-10 h-7 cursor-pointer' onClick={handelProfile} /></Link>

                  </div>
  
 
           


    </div>
  )
}

export default SmallScreenHeader


