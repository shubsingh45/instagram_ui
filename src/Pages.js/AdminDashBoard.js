import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FaComment, FaHeart, FaNewspaper, FaUser } from 'react-icons/fa'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { getToken } from '../localStorage'
import DashboardUser from '../Component.js/Dashboard/DashBoardUser.js'
import DashboardPost from '../Component.js/Dashboard/DashBoardPost.js'
import DashboardLike from '../Component.js/Dashboard/DashBoardLike.js'
import DashboardComment from '../Component.js/Dashboard/DashBoardComment.js'

const AdminDashBoard = () => {
    const [showUser, setShowUser] = useState(true)
    const[showPost, setShowPost]  = useState(false)
    const[showLike, setShowLike] = useState(false)
    const[showComment, setShowComment] = useState(false)


    const handelShowUser = () => {
        setShowUser(true)
        setShowPost(false)
        setShowLike(false)
        setShowComment(false)
    }
    const handelShowPost = () => {
        setShowUser(false)
        setShowPost(true)
        setShowLike(false)
        setShowComment(false)
    }
    const handelShowLike = () => {
        setShowUser(false)
        setShowPost(false)
        setShowLike(true)
        setShowComment(false)
    }
    const handelShowComment = () => {
        setShowUser(false)
        setShowPost(false)
        setShowLike(false)
        setShowComment(true)
    }

     return (
        <div className=' lg:w-[58%]  flex flex-row w-full    sm:w-full min-h-screen sm:mt-12 md:mt-12 lg:mt-0 lg:ml-[256px]' >
            <Sidebar className='  overflow-hidden bg-white    fixed mr-96 top-0  '>
                <Sidebar.Items className=' border-r-2' >
                    <Sidebar.ItemGroup className='flex flex-col gap-6 text-xl items-start ml-0'>
                    <Link
                        className=' flex flex-row  items-center'
                        onClick={handelShowPost}>
                        <Sidebar.Item
                            icon={FaNewspaper}
                            className =''
                        />
                        Post
                        </Link>
                        <Link
                        className=' flex flex-row items-center'
                        onClick={handelShowUser}>
                        <Sidebar.Item
                            icon={FaUser}
                            className =''
                        />
                        User
                        <div className="">
                        </div>
                        </Link>
                        <Link
                        className=' flex flex-row items-center'
                        onClick={handelShowLike}>
                        <Sidebar.Item
                            icon={FaHeart}
                            className =''
                        />
                        Like
                        </Link>
                        <Link
                        className=' flex flex-row items-center'
                        onClick={handelShowComment}>
                        <Sidebar.Item
                            icon={ FaComment}
                            className =''
                        />
                        Comment
                        </Link>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div className=" ml-36">
                 {
                    showPost && (
                        <div className="">
                           <DashboardPost/>
                        </div>
                    )
                 }
                 {
                    showUser && (                     
                    <div className="">
                    <DashboardUser/>
                    </div>
                       
                    )
                 }{
                    showLike && (
                        <div className="">
                           <DashboardLike/>
                        </div>
                    )
                 }{
                    showComment && (
                        <div className="">
                        <DashboardComment/>
                        </div>
                    )
                 }
            </div>

        </div>
    )
}

export default AdminDashBoard