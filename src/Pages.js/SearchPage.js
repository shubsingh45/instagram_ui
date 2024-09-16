import React from 'react'
import RecentPosts from '../Component.js/RecentPosts'

const SearchPage = () => {
  return (
    <div className=' lg:w-[60%] flex flex-col w-full   sm:w-full min-h-screen sm:mt-12 md:mt-12 lg:mt-0 lg:ml-[256px]' >
    <RecentPosts/>
    </div>

  )
}

export default SearchPage