import React, { useEffect, useState } from 'react'
import image from './image.jpg'
import { FaCheckCircle, FaListUl, FaShare, FaStar, FaWindowClose } from 'react-icons/fa'
import { HiArrowUp, HiEyeOff, HiHeart, HiOutlineChat, HiOutlineHeart, HiOutlineSave, HiOutlineUserCircle, HiOutlineUserRemove } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const UploadedPost = () => {
    const [addFavfavorite, setAddFavorite] = useState('')
    const [showModel, setShowModel] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const[showShare, setShowShare] = useState(false)
    const[showSendTick, setShowSendTick] = useState(false)
    const [LikeColor, setLikeColor] = useState('')
   const [commentLike, setCommentLike] = useState('')
    const handelShowTick = () => {
        if(showSendTick){
            setShowSendTick(false)
        }else{
            setShowSendTick(true)
        }
    }

    const handelLikeColor = () => {
        if(LikeColor){
            setLikeColor('')
        }else{
            setLikeColor('red')
        }
    }
    const handelClickImageToLike = () => {
        setShowComment(false)
        if(LikeColor){
            setLikeColor('')
        }else{
            setLikeColor('red')
        }

    }
    const handelCommentLike = () => {
        if(commentLike){
            setCommentLike('')
        }else{
            setCommentLike('red')
        }
    }


    return (
        <div className=' min-h-screen w-full'>
            <div className=" flex  flex-col w-full items-center " >
                <div className=" flex flex-row items-center justify-between w-full  lg:w-[70%] pt-3 pb-3" onClick={() => setShowComment(false)}>
                    <div className=" flex flex-row items-center gap-2 ml-2">
                    <img src={image} alt="" className=' w-12 h-12 rounded-full' />
                    <span className=' ml-2 cursor-pointer'>Shubham_kumar</span>
                    </div>
                    <div className="">
                    <FaListUl className=' mr-2 cursor-pointer' onClick={() => setShowModel(true)} />
                    </div>
                </div>
                {
                    showModel && (
                        <div className="fixed bottom-0 w-full bg-slate-100 h-[84%] lg:w-[44%] rounded-t-xl"
                            style={{ transform: '5s' }}
                        >
                            <div className="">
                                <div className=" flex justify-end w-full p-4 ">
                                    <FaWindowClose className=' w-7 h-6 cursor-pointer ' onClick={() => setShowModel(false)} />

                                </div>
                                <hr className=' border-[1px] border-gray-300' />
                                <div className=" flex flex-col  gap-6 mt-3">
                                    <div className="  flex items-center">
                                        <Link><HiOutlineSave className=' w-16 h-9 ' /></Link>
                                        <Link><span>Save</span></Link>
                                    </div>
                                    <hr className=' border-[1px] border-gray-300' />
                                    <div className="  flex items-center " >
                                        <Link><FaStar className=' w-16 h-9 bg-transparent' style={{ color: addFavfavorite }} onClick={() => setAddFavorite('red')} onDoubleClick={() => setAddFavorite('')} /></Link>
                                        <Link><span>Add to favorites</span></Link>
                                    </div>
                                    <div className="  flex items-center">
                                        <Link><HiOutlineUserRemove className=' w-16 h-9 ' /></Link>
                                        <Link><span>Unfollow</span></Link>
                                    </div>
                                    <hr className=' border-[1px] border-gray-300' />
                                    <div className="  flex items-center">
                                        <Link><HiEyeOff className=' w-16 h-9 ' /></Link>
                                        <Link><span>Hide</span></Link>
                                    </div>
                                    <div className="  flex items-center">
                                        <Link><HiOutlineUserCircle className=' w-16 h-9 ' /></Link>
                                        <Link><span> About this account</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
                {
                    showComment && (
                        <div className="fixed bottom-0 w-full bg-slate-100 h-[84%] lg:w-[44%] rounded-t-xl"
                            style={{ transform: '5s' }}
                        >
                            <div className=" w-full border-b border-gray-400 flex  justify-around items-center  h-10">
                                <h1 className=' '>Comments</h1>
                                <FaWindowClose className=' w-7 h-6 cursor-pointer ' onClick={() => setShowComment(false)} />


                            </div>

                                <div className=" w-full flex flex-row justify-center gap-3 items-center mt-4">
                                    <div className=" flex flex-row">
                                        <div className="">
                                            <Link to={``}><img src={image} alt="image" className=' w-9 rounded-full ml-2' /></Link>
                                        </div>
                                        <div className=" w-full flex flex-col  ml-4">
                                            <Link to={''}><span>username</span></Link>
                                            <span className=' text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit. </span>
                                        </div>
                                    </div>

                                    <div className=" mr-2">
                                        <HiHeart style={{color: commentLike}} onClick={handelCommentLike} />
                                        <span className=' text-xs'>127</span>
                                    </div>
                            </div>
                            <div className=" flex gap-2 w-full lg:w-[44%] border-t border-gray-400 h-16 justify-center items-center mb-2 mr-0  fixed bottom-1">
                                <Link to={`/profile`}><img src={image} alt="image" className=' w-9 h-9 rounded-full ' /> </Link>
                                <input type="text" className='  h-12  w-[70%] lg:w-full' placeholder='Add comment from Insts User' />
                                <div className=" bg-blue-500 w-10 h-6 rounded-2xl flex justify-center items-center cursor-pointer"><HiArrowUp className=' text-white w-10 h-4' /></div>
                            </div>

                        </div>

                    )
                }
                {
                    showShare && (
                        <div className="fixed bottom-0 w-full bg-slate-100 h-[84%] lg:w-[44%] rounded-t-xl"
                            style={{ transform: '5s' }} >
                           <div className=" flex justify-end w-full items-center">
                           <FaWindowClose className=' w-7 h-6 cursor-pointer ' onClick={() => setShowShare(false)} />
                           </div>
                         <hr className=' w-full bg-slate-400 mt-10 h-[2px]'></hr>

                        <div className=" grid justify-center items-center grid-cols-4  w-full p-3">
                            <div className="flex flex-col justify-center items-center text-center cursor-pointer" onClick={handelShowTick} >
                                <img src={image} alt="" className=' w-16 rounded-full' />
                                <span>instagram user</span>
                            </div>
                            {
                                showSendTick && (
                                    <FaCheckCircle className=' text-blue-500 h-6 w-6 relative right-9' />
                                )
                            }
                            

                        </div>
                         <div className=" flex w-full lg:w-[44%] border-t border-gray-400  justify-center items-center mb-2 mr-0  fixed bottom-0">
                        <button className=' mt-2 w-[80%] h-10 bg-blue-500 rounded-lg'>Send</button>
                            </div>
                        </div>
                    )
                }

                <img src={image} alt="" className=' lg:w-[70%]  lg:h-[80%]' onDoubleClick={handelClickImageToLike} />
                <div className=" flex justify-start lg:w-[70%] gap-4  w-full">
                    <HiHeart className=' w-7 h-6 mt-2 cursor-pointer ml-2' style={{color: LikeColor}} onClick={handelLikeColor} />
                    <HiOutlineChat className=' w-7 h-6 mt-2 cursor-pointer' onClick={() => setShowComment(true)} />
                    <FaShare className=' w-7 h-6 mt-2 cursor-pointer' onClick={() => setShowShare(true)}/>
                </div>

            </div>



        </div>
    )
}

export default UploadedPost 