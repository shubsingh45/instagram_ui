import React, { useState } from 'react'
import instslogo from '../instalogo.png'
import { Sidebar } from 'flowbite-react'
import { FaDashcube, FaHome, FaSearch, FaVideo } from 'react-icons/fa'
import { HiMailOpen, HiOutlineIdentification, HiOutlinePlusCircle, HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BigScreenHeader = () => {
    const { currentUser } = useSelector(state => state.user)
    const [adminDash, setAdminDash] = useState(false)
    const handelShowAdminPannel = () => {
        if(setAdminDash){
            setAdminDash(true)
        }
        
    }
    return (
        <div className=' w-60  border-r-2 lg:block sm:hidden md:hidden hidden  min-h-screen fixed top-0 left-0 '>
            <img src={instslogo} alt="" className=' w-32 mt-4 ml-4' />
            <Sidebar className=" mt-14">

                <Sidebar.Items>
                    <Sidebar.ItemGroup className=' flex flex-col gap-3 text-xl items-start ml-4'>
                      { currentUser.isAdmin && (

                            <Link to={'/admindashboard'}>
                                <Sidebar.Item 
                                    icon={FaDashcube}
                                    className='cursor-pointer'
                                >
                                   <h1 onClick={handelShowAdminPannel}>DashBoard (Admin)</h1>
                                </Sidebar.Item>
                            </Link>
                      )

                     }
                        <Link to={'/'}>
                            <Sidebar.Item
                                icon={FaHome}

                                className='cursor-pointer'
                            >
                                Home
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/search'}>
                            <Sidebar.Item
                                icon={FaSearch}
                                className='cursor-pointer'
                            >
                                Search
                            </Sidebar.Item>
                        </Link>
                        <Link to={'/create'}>
                            <Sidebar.Item
                                icon={HiOutlinePlusCircle}
                                className='cursor-pointer'
                            >
                                Create
                            </Sidebar.Item>
                        </Link>


                        <Link to={'/reels'}>
                            <Sidebar.Item
                                icon={FaVideo}
                                className='cursor-pointer'
                            >
                                Reels
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/message'}>
                            <Sidebar.Item
                                icon={HiMailOpen}
                                className='cursor-pointer'
                            >
                                Message
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/notification'}>
                            <Sidebar.Item
                                icon={HiOutlineIdentification}
                                className='cursor-pointer'
                            >
                                Notification
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/profile'}>
                            <Sidebar.Item
                                icon={HiUser}
                                className='cursor-pointer'
                            >
                                Profile
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default BigScreenHeader