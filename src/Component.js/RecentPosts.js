import React, { useRef } from 'react'
import image from '../Pages.js/image.jpg'
import video from './video.mp4'
const RecentPosts = () => {

  const videoRef = useRef([])
  const handelEnterMouse = () => {
    if(videoRef.current){
      videoRef.current.play()
    }
  }
  const handelRemoveMouse =() => {
    if(videoRef.current){
      videoRef.current.pause();
    }
  }

  return (
    <div className=' w-full  min-h-screen p-1'>
              <div className=" flex justify-center mt-3">
    <input
    className=' w-[90%] h-12 border-[1px] border-gray-500 rounded-full'
    
  placeholder='search...'
    />
    <button className=' bg-pink-400 rounded-full h-12 w-28 -ml-28'>Search</button>
       
    </div>

      <div  className=" mt-3">
       <div  className=" grid grid-cols-3 lg:grid-cols-4 text-wrap">
       <div  className="p-0 m-0">
        <img src={image} alt=""  />
       </div>
       <div className=" p-0 m-0">
        <img src={image} alt="" />
       </div> 
        <div className=" p-0 m-0">
        <img src={image} alt="" />
       </div> 
        <div onMouseEnter={handelEnterMouse}  onMouseLeave={handelRemoveMouse} className=" p-0 m-0">
        <video ref={videoRef} src={video} className=''></video>
        </div>
       <div className=" p-0 m-0">
        <img src={image} alt="" />
       </div> 
       <div className=" p-0 m-0">
        <img src={image} alt="" />
       </div>
       <div  className=" p-0 m-0 bg-slate-300">
        <video ref={videoRef} src={video} className=''></video>
        </div>

       <div className=" p-0 m-0">
        <img src={image} alt="" />
       </div> 
 



       </div>
      </div>

</div>

  )
}

export default RecentPosts