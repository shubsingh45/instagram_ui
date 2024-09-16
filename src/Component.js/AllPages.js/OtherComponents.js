import React, { useState } from 'react'
import image from './image.jpg'
import { FaPlus } from 'react-icons/fa'
import { ChannelSection, GenaralSection, PrimarySection, RequestSection } from './MessageSection'
import { HiArrowCircleRight, HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const NotificationComponent = () => {
    return (
        <div className=" w-full mt-12 lg:mt-0">
            <div className=" flex  justify-between p-2 items-center">
                <div className=" flex items-center gap-3">
                    <img src={image} alt="" className='  h-16 w-16 rounded-full' />
                    <h1 className=' font-semibold'>Rohit_liked your reel <span className=' font-normal ml-4'> date</span></h1>
                </div>
                <div className="">
                    <img src={image} alt="" className='  h-16 w-16 rounded-lg' />
                </div>
            </div>

        </div>
    )
}




const LikeComponent = () => {
    const[color1, setColor1] = useState('#90caf9')
    const[color2, setColor2] = useState('')
    const[color3, setColor3] = useState('')
    const[color4, setColor4] = useState('')

    const[primary, setPrimary] = useState(true)
    const[genaral, setGenaral] = useState(false)
    const[channel, setChannel] = useState(false)
    const[request, setRequest] = useState(false)

    const handelPrimary = () => {
        setPrimary(true)
        setGenaral(false)
        setRequest(false)
        setChannel(false)
        setColor1('#90caf9')
        setColor2('')
        setColor3('')
        setColor4('')
    }

    const handelGenaral = () => {
        setPrimary(false)
        setGenaral(true)
        setRequest(false)
        setChannel(false)
        setColor1('')
        setColor2('#90caf9')
        setColor3('')
        setColor4('')

    }
    const handelChannel = () => {
        setPrimary(false)
        setGenaral(false)
        setRequest(false)
        setChannel(true)
        setColor1('')
        setColor2('')
        setColor3('#90caf9')
        setColor4('')
    }
    const handelRequest = () => {
        setPrimary(false)
        setGenaral(false)
        setRequest(true)
        setChannel(false)
        setColor1('')
        setColor2('')
        setColor3('')
        setColor4('#90caf9')
    }

    return (
        <div className=" flex gap-2 lg:w-[70%] w-full  p-2 flex-col  mt-2 ">
            <div className="  flex justify-center w-full">
                <input
                    className=' w-[99%] h-12 border-[1px] border-gray-500 rounded-full'

                    placeholder='search...'
                />
                <button className=' bg-pink-400 rounded-full h-12 w-28 -ml-28'>Search</button>

            </div>

            <div className="rounded-full mt-2]">
                <img src={image} alt="" className='  h-16 w-16 rounded-full border-red-500 border-2 cursor-pointer' />
                <FaPlus className=' h-6 w-6 ml-10 -mt-6 cursor-pointer' />
                <span className=' text-xs'>Your story</span>
            </div>

            <div className=" flex flex-row gap-3 justify-between w-full  ">
                <button className=' bg-gray-300 p-2 w-24 lg:w-32  rounded-md cursor-pointer' style={{backgroundColor : color1}} onClick={handelPrimary}>Primary</button>
                <button className=' bg-gray-300 p-2 w-24 lg:w-32  rounded-md cursor-pointer' style={{backgroundColor : color2}} onClick={handelGenaral}>General</button>
                <button className=' bg-gray-300 p-2 w-24 lg:w-32  rounded-md cursor-pointer' style={{backgroundColor : color3}} onClick={handelChannel}>Channel</button>
                <button className=' bg-gray-300 p-2 w-24 lg:w-32  rounded-md cursor-pointer' style={{backgroundColor : color4}} onClick={handelRequest}>Request</button>
                
            </div>
            <div className=" w-full mt-2 justify-center items-center flex ">
                {
                    primary && <PrimarySection/>
                }
                {
                    genaral && <GenaralSection/>
                }
                {
                    channel && <ChannelSection/>
                }
                {
                    request && <RequestSection/>
                }
            </div>



        </div>

    )
}


export {
    NotificationComponent, LikeComponent
}