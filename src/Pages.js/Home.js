import React from 'react'
import UploadedPost from '../Component.js/AllPages.js/UploadedPost'
import StorySection from '../Component.js/StorySection'
const Home = () => {
  return (
    <div className=' lg:w-[58%] flex flex-col w-full   sm:w-full min-h-screen sm:mt-12 md:mt-12 lg:mt-0 lg:ml-[256px]' >
    <div className="  lg:mt-3">
    <StorySection/>
      <UploadedPost/>
    </div>
    </div>
  )
}

export default Home