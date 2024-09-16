import React from 'react'
import image from './image.jpg'
import {Modal} from 'flowbite-react'
import { NotificationComponent } from '../Component.js/AllPages.js/OtherComponents'
const Notification = () => {
  return (
    <div className=' lg:w-[60%] flex flex-col w-full   sm:w-full min-h-screen mt-12 lg:ml-[256px] items-center' >
      
      <div className=" lg:block sm:hidden hidden w-[70%] flex  items-center flex-col">
      <NotificationComponent/>
      </div>

    </div>
  )
}

export default Notification