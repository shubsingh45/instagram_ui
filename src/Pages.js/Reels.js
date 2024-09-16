import React, { useRef, useState } from 'react'
import image from './image.jpg'
import { HiArrowCircleUp, HiArrowUp, HiDotsVertical, HiEye, HiEyeOff, HiOutlineArrowLeft, HiOutlineCamera, HiOutlineChat, HiOutlineHeart, HiOutlineSave, HiOutlineShare } from 'react-icons/hi'
import video from '../Component.js/video.mp4'
import { Link } from 'react-router-dom'
const Reels = () => {
  const username = 'Instagram user'
  const [showMore, setShowMore] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const[showShare, setShowShare] = useState(false) 

  const handelTapScreen = () => {
    setShowComment(false)
    setShowMore(false)
    setShowShare(false)
  }

  return (
    <div className=' lg:w-[60%] flex flex-col w-[100%]   min-h-screen   lg:ml-[240px] text-white' >
      <div className=" min-h-screen max-h-screen w-full  flex justify-center items-center  " >
        <div className="  block w-full lg:w-[50%] lg:h-[90%] justify-center">
          <video src={video} className='h-full bg-transparent w-full cursor-pointer block' onClick={handelTapScreen} height='full'></video>
          <HiOutlineCamera className=' w-10 h-7 cursor-pointer absolute top-12 left-[345px] lg:left-[760px] lg:top-12' />

        </div>
        <div className=" absolute left-4 lg:left-[500px] bottom-28 ">
          <div className=" flex flex-row gap-2 items-center">
            <img src={image} className=' w-9 rounded-full' alt="user_img" />
            <span>Instagram user</span>
            <button className=' border-white border-[1px] w-20 rounded-2xl'>Follow</button>
          </div>

        </div>
        <div className="  absolute  left-[345px] lg:left-[750px] bottom-28 gap flex gap-3 flex-col">
          <div className="  flex flex-col items-center">
            <HiOutlineHeart className=' w-10 h-7 cursor-pointer   ' />
            <span>152</span>
          </div>

          <div className=" flex flex-col items-center" onClick={() => setShowComment(true)}>
            <HiOutlineChat className=' w-10 h-7 cursor-pointer  ' />
            <span>35</span>
          </div>
          {
        showComment && (
          <div className=" absolute -bottom-52 lg:-bottom-40  h-[450px] lg:h-[378px] w-[400px] lg:w-[322px] text-black bg-slate-200 -right-4  lg:-right-5">
            <div className=" w-full border-b border-gray-400 flex justify-center items-center  h-10">
              <h1 className=' '>Comments</h1>

            </div>
            <div className="">

              <div className=" flex flex-row items-center mt-4">
                <div className=" flex flex-row">
                  <div className="">
                    <Link to={`/${username}`}><img src={image} alt="image" className=' w-9 rounded-full ml-2' /></Link>
                  </div>
                  <div className=" flex flex-col  ml-4">
                    <Link to={`/${username}`}><span>{username}</span></Link>
                    <span className=' text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. </span>
                  </div>
                </div>

                <div className=" mr-2">
                  <HiOutlineHeart />
                  <span className=' text-xs'>127</span>
                </div>
              </div>
            </div>
            <div className=" flex gap-2 w-[90%] lg:w-[23%] border-t border-gray-400 fixed bottom-0 h-16 justify-center items-center mb-2 mr-0 lg:right-[41%] fixed bottom-0">
              <Link to={`/profile`}><img src={image} alt="image" className=' w-9 h-9 rounded-full ' /> </Link>
              <input type="text" className='  h-12' placeholder='Add comment from Insts User' />
              <div className=" bg-blue-500 w-10 h-6 rounded-2xl flex justify-center items-center cursor-pointer"><HiArrowUp className=' text-white w-10 h-4' /></div>
            </div>
          </div>
        )
      }

          <div className=" flex flex-col items-center" onClick={() => setShowShare(true)}>
            <HiOutlineShare className=' w-10 h-7 cursor-pointer  ' />
            <span>689</span>
          </div>
          {
          showShare && (
            <div className=" absolute -bottom-52 lg:-bottom-40 h-[450px] lg:h-[378px] w-[395px] lg:w-[322px] text-black bg-slate-200 -right-4  lg:-right-5  ">
                <div className=" w-full h-full flex flex-col gap-2 mt-2">
                  <div className=" flex flex-row items-center" onClick={() => setShowShare(false)} onMouseDown={() => setShowMore(false)}>
                    <HiOutlineArrowLeft className=' w-10 h-5 cursor-pointer ' />
                    <span>Back</span>
                  </div>
                  <hr className=' border border-gray-400 w-full' />
                  <div className=" grid grid-cols-4  text-center ml-1 gap-2">
                  <div className=" flex flex-col justify-center items-center">
                   <Link to={`/profile`}><img src={image} alt="image" className=' w-10  rounded-full ' /> </Link>
                     <span>insta user</span>
                   </div>
                 

                  </div>
                </div>
              </div>

        )
      }

          <div className=" flex flex-col items-center">
            <HiDotsVertical className=' w-10 h-7 cursor-pointer ' onClick={() => setShowMore(true)} />
          </div>
          {
            showMore && (
              <div className=" absolute -bottom-52 lg:-bottom-40 h-[450px] lg:h-[378px] w-[395px] lg:w-[322px] text-black bg-slate-200 -right-4  lg:-right-5  ">
                <div className=" w-full h-full flex flex-col gap-5 mt-11">
                  <div className=" flex flex-row" onClick={() => setShowMore(false)} onMouseDown={() => setShowMore(false)}>
                    <HiOutlineArrowLeft className=' w-10 h-7 cursor-pointer ' />
                    <span>Back</span>
                  </div>
                  <hr className=' border border-gray-400 w-full' />
                  <div className=" flex flex-row">
                    <HiOutlineSave className=' w-10 h-7 cursor-pointer ' />
                    <span>Save</span>
                  </div>
                  <div className=" flex flex-row">
                    <HiEye className=' w-10 h-7 cursor-pointer ' />
                    <span>Intersted</span>
                  </div>
                  <div className=" flex flex-row">
                    <HiEyeOff className=' w-10 h-7 cursor-pointer ' />
                    <span>Not intersted</span>
                  </div>
                </div>
              </div>
            )
          }

        </div>

      </div>


    </div>

  )
}

export default Reels