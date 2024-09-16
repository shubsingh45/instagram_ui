import React, { useState } from 'react'
import convertToBase64 from '../Component.js/AllPages.js/ImgaeUpload';
import insta from './image.jpg'
import { FaCheckCircle, FaHome, FaListUl, FaSearch, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from './image.jpg'
import { HiOutlineArrowLeft, HiOutlinePlusCircle, HiOutlineViewGrid, HiUser, HiUserAdd } from 'react-icons/hi';
import HighLightStory from '../Component.js/HighLightStory';
import PostProfile from '../Component.js/PostProfile'
import ReelsProfile from '../Component.js/ReelsProfile'
import CollabrateProfile from '../Component.js/CollabrateProfile';
import Dashboard from './Dashboard'
import { useSelector } from 'react-redux';
const Profile = () => {
  const {currentUser}  = useSelector(  state => state.user)
  // console.log(currentUser)
  const [showShare, setShowShare] = useState('')

  const [showHeader, setShowHeader] = useState(true)
  const [showMore, setShowMore] = useState(false)

  const [post, setPost] = useState(true)
  const [video, setVideo] = useState(false)
  const [collabrate, setCollabrate] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false)
  const [followerComp, setFollowerComp] = useState(true)
  const [followingComp, setFollowingComp] = useState(false)
  const[showSendTick, setShowSendTick] = useState(false)
  const [showFooter, setShowFooter] = useState(true)

  const [followerColor, setFollowerColor] = useState('2px solid gray')
  const [followingColor, setFollowingColor] = useState('')
  const handelFollower = () => {
    setFollowerColor('2px solid gray')
    setFollowingColor('')
    setFollowerComp(true)
    setFollowingComp(false)
  }
  const handelFollowing = () => {
    setFollowerColor('')
    setFollowingColor('2px solid gray')
    setFollowingComp(true)
    setFollowerComp(false)
  }


  const handelShowFollowers = () => {
    setShowFollowers(true)
    setShowHeader(false)
    setShowFooter(false)
  }
  const handelOffFollowers = () => {
    setShowFollowers(false)
    setShowHeader(true)
    setShowFooter(true)

  }


  const showPostToProfile = () => {
    setPost(true)
    setCollabrate(false)
    setVideo(false)
  }
  const showReelsToProfile = () => {
    setVideo(true)
    setPost(false)
    setCollabrate(false)
  }
  const showCollabrateToProfile = () => {
    setCollabrate(true)
    setPost(false)
    setVideo(false)
  }

  const handelShowMore = () => {
    setShowHeader(false)
    setShowMore(true)
  }
  const handelOffShowMore = () => {
    setShowMore(false)
    setShowHeader(true)
    setShowFooter(true)

  }
  const handelShowToShare = () => {
    setShowShare(true)
    setShowHeader(false)
    setShowFooter(false)
    console.log('jj')
  }
  const handelSelectToShare =() => {
   if(showSendTick){
   setShowSendTick(false)
   }else{
   setShowSendTick(true)}
  }


  return (
    <div className=' lg:w-[60%] flex flex-col w-full   sm:w-full min-h-screen sm:mt-5 md:mt-12 lg:mt-0 lg:ml-[241px]' >
      {
        showHeader && (
          <div className="  w-full ">
            <div className=" flex w-full justify-between h-12 items-center border-b-2  bg-white ">
              <span>{currentUser.username}</span>
              <FaListUl className=' w-8 h-6 cursor-pointer' onClick={handelShowMore} />
            </div>
           {
            showFooter && (
              <div className=" flex fixed bottom-0 justify-between w-full items-center bg-white h-10">
                  <Link to={'/'}> <FaHome className=' w-10 h-5 cursor-pointer'  /></Link>
                  <Link to={'/search'}> <FaSearch className=' w-10 h-5 cursor-pointer' /></Link>
                  <Link to={'/create'}><HiOutlinePlusCircle className=' w-10 h-7 cursor-pointer'  /></Link>
                  <Link to={'/reels'}><FaVideo className=' w-10 h-5 cursor-pointer'  /></Link>
                  <Link to={'/profile'}><HiUser className=' w-10 h-7 cursor-pointer' /></Link>

                </div>
            )
           }


          </div>

        )
      }
      {
        showMore ? (
          <div className=" flex w-full  mt-0 flex-col  justify-center lg:mt-4 gap-0 ">
            <div className="border-b border-gray-400 w-full sticky top-0 left-0 bg-white">
              <Link className='flex flex-row items-center h-12 ' to={'/profile'}><HiOutlineArrowLeft className=' w-9 h-7 ml-3 cursor-pointer' onClick={handelOffShowMore} />
                <span>back</span>
              </Link>
            </div>
            <div className="">
              <Dashboard />
            </div>
          </div>


        )
          : 
          ( showShare ? (
            <div className=" flex w-full  mt-0 flex-col  justify-center lg:mt-4 gap-0 ">
            <div className="border-b border-gray-400 w-full sticky top-0 left-0 bg-white">
              <Link className='flex flex-row items-center h-12 ' to={'/profile'}><HiOutlineArrowLeft className=' w-9 h-7 ml-3 cursor-pointer' onClick={() => {setShowHeader(true); setShowShare(false); setShowFooter(true)}} />
                <span>back</span>
              </Link>
            </div>

                        <div className=" grid justify-center items-center grid-cols-4  w-full p-3">
                            <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={handelSelectToShare} >
                                <img src={image} alt="" className=' w-16 rounded-full' />
                                <span>instagram user</span>
                            </div>
                            {
                                showSendTick && (
                                    <FaCheckCircle className=' text-blue-500 h-6 w-6 relative right-9 lg:right-20 mt-0 lg:mt-2' />
                                )
                            }
                            

                        </div>
                         <div className=" flex w-full lg:w-[60%] border-t border-gray-400  justify-center items-center mb-2 mr-0  fixed bottom-0 lg:left-68">
                        <button className=' mt-2 w-[80%] h-10 bg-blue-500 rounded-lg'>Send</button>
                            </div>
                        </div>


          )
           : 
          (

          (
            <>




              {
                showFollowers ? (
                  <div className=" flex w-full  mt-0  justify-center lg:mt-4 gap-0 lg:gap-48">
                    <div className=" w-full min-h-screen flex flex-col items-center">
                      <div className=" flex flex-col w-full  items-center gap-2 h-24   sticky top-0 left-0 bg-white" >
                        <div className=" w-full flex justify-start border-b-[2px] border-gray-200 items-center h-12">
                          <HiOutlineArrowLeft className=' w-9 h-7 ml-3 cursor-pointer' onClick={handelOffFollowers} />
                          <h1 className=' text-lg cursor-pointer' >back</h1>
                        </div>
                        <div className=" w-full">
                          <div className=" flex flex-row justify-around w-full  border-b-[2px]  h-12 items-center border-gray-200">
                            <div className="  h-12 w-[50%] flex items-center justify-center " style={{ borderBottom: followerColor }}>
                              <span className=' text-lg cursor-pointer' onClick={handelFollower}>Followers</span>
                            </div>
                            <div className=" h-12 w-[50%] flex items-center justify-center" style={{ borderBottom: followingColor }}>
                              <span className='text-lg cursor-pointer' onClick={handelFollowing}>Following</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {
                        followerComp && (
                          <div className="  w-full lg:w-[50%]  mt-2 flex flex-col gap-3">
                            <div className=" w-full flex flex-row items-center justify-center gap-2 ml-2">
                              <div className=" flex-row flex w-[60%] gap-5 items-center">
                                <img src={image} alt="" className=' h-14 w-14 rounded-full' />
                                <div className=" flex flex-col justify-center">
                                  <span>instagram_user</span>
                                  <span> insta user</span>
                                </div>
                              </div>
                              <div className=" w-[40%] flex items-center justify-center">
                                <button className=' border w-28 h-9 rounded-lg bg-slate-200'>Remove</button>
                              </div>
                            </div>
                            <div className=" w-full flex flex-row items-center justify-center gap-2">
                              <div className=" flex-row flex w-[60%] gap-5 items-center">
                                <img src={image} alt="" className=' h-14 w-14 rounded-full' />
                                <div className=" flex flex-col justify-center">
                                  <span>instagram_user</span>
                                  <span> insta user</span>
                                </div>
                              </div>
                              <div className=" w-[40%] flex items-center justify-center">
                                <button className=' border w-28 h-9 rounded-lg bg-slate-200'>Remove</button>
                              </div>
                            </div>
                            <div className=" w-full flex flex-row items-center justify-center gap-2">
                              <div className=" flex-row flex w-[60%] gap-5 items-center">
                                <img src={image} alt="" className=' h-14 w-14 rounded-full' />
                                <Link className=" flex flex-col justify-center">
                                  <span>instagram_user</span>
                                  <span> insta user</span>
                                </Link>
                              </div>
                              <div className=" w-[40%] flex items-center justify-center">
                                <button className=' border w-28 h-9 rounded-lg bg-slate-200'>Remove</button>
                              </div>
                            </div>

                          </div>
                        )
                      }
                      {
                        followingComp && (
                          <div className=" w-full lg:w-[50%]  mt-2 flex flex-col gap-3">
                            <div className=" w-full flex flex-row items-center justify-center gap-2 ml-2">
                              <div className=" flex-row flex w-[60%] gap-5 items-center">
                                <img src={image} alt="" className=' h-14 w-14 rounded-full' />
                                <Link className=" flex flex-col justify-center">
                                  <span>instagram_user</span>
                                  <span> insta user</span>
                                </Link>
                              </div>
                              <div className=" w-[40%] flex items-center justify-center">
                                <button className=' border w-28 h-9 rounded-lg bg-slate-200'>Following</button>
                              </div>
                            </div>

                          </div>

                        )
                      }
                    </div>

                  </div>
                )
                  :

                  (
                    <>

                      <div className=" flex w-full  mt-0  justify-center lg:mt-4 gap-0 lg:gap-48">
                        <div className="left ml-2">
                          <div className="profile flex justify-center  flex-col">
                            <img src={image} alt="profile pic"
                              className="border-4 border-gray-50 shrink-100  w-[100px] h-[100px]  lg:w-[130px] lg:h-[130px] rounded-full shadow-lg cursor-pointer hover:border-gray-200 sm:w-32 md:w-32" />
                            <Link ><HiOutlinePlusCircle className=' w-8 h-8 -mt-10 ml-[70px] cursor-pointer text-blue-500 md:w-40' /></Link>
                            <div className=" w-36 flex  mt-3">
                              <span>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo vitae officia voluptates
                                suscipit. Quaerat, maiores?</span>
                            </div>
                          </div>

                        </div>
                        <div className="right flex gap-2 mt-5 lg:gap-6">
                          <div className=" flex flex-col items-center ">
                            <span>12</span>
                            <span>Posts</span>
                          </div>

                          <div className=" flex flex-col items-center cursor-pointer"  >
                            <span onClick={handelShowFollowers}>912</span>
                            <span onClick={handelShowFollowers}>Followers</span>
                          </div>

                          <div className=" flex flex-col items-center" >
                            <span onClick={handelShowFollowers}>125</span>
                            <span onClick={handelShowFollowers}>Following</span>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-row justify-center w-full gap-4 mt-2 lg:gap-28">
                        <Link to={'/editprofile'}>
                          <button className=' h-[43px] w-[150px] bg-slate-200 rounded-sm'>Edit Profile</button>
                        </Link>
                        <button className=' h-[43px] w-[150px] bg-slate-200 rounded-sm' onClick={handelShowToShare}>Share Profile</button>
                      </div>
                      <HighLightStory />

                      <div className=" flex mt-3 ">
                        <div className=" flex flex-col  items-center w-[165px] lg:w-[280px] md:w-[260px]">
                          <HiOutlineViewGrid className=' h-6 w-6 cursor-pointer' onClick={showPostToProfile} />
                          {
                            post && <span className=" w-28 h-[2px] bg-slate-500 md:w-40"></span>
                          }
                        </div>
                        <div className="flex flex-col justify-center items-center  w-[165px] lg:w-[280px] md:w-[260px]">
                          <FaVideo className=' h-6 w-6 cursor-pointer' onClick={showReelsToProfile} />
                          {
                            video && <span className=" w-28 h-[2px] bg-slate-500 md:w-40"></span>
                          }

                        </div>
                        <div className="flex flex-col justify-center items-center  w-[165px] lg:w-[280px] md:w-[260px]">
                          <HiUserAdd className=' h-6 w-6 cursor-pointer' onClick={showCollabrateToProfile} />
                          {
                            collabrate && <span className=" w-28 h-[2px] bg-slate-500 md:w-40"></span>
                          }

                        </div>
                      </div>

                      <div className=" mt-[2px] flex justify-center">

                        {
                          post && <PostProfile />
                        }


                      </div>
                      <div className="">
                        {
                          video && <ReelsProfile />

                        }
                      </div>
                      <div className="">
                        {
                          collabrate && <CollabrateProfile />

                        }
                      </div>
                    </>

                  )
              }
            </>
          ))

          )
      }


    </div>

  )
}

export default Profile