import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Sidebar, SidebarItem} from 'flowbite-react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {removeToken} from '../localStorage'
import { SignOutSuccess } from './Redux/UserSlice'
const Dashsidebar = () => {
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[tab, setTab] = useState('')
    const location = useLocation()
    const[showPage, setShowPage] = useState(true)

    useEffect(() => {
        const URParams = new URLSearchParams(location.search)
        const tabFromUrl = URParams.get('tab')
        if(tabFromUrl){
            setTab(tabFromUrl)
        }
    }, [location.search])
    const handelSignUp = async() => {
        try {
            const res = await axios.post('http://localhost:5000/api/user/signout')
             if(res.data.message === 'success'){
                localStorage.removeItem('token')
                 dispatch(SignOutSuccess(currentUser))
               navigate('/signin')
             }
        } catch (error) {
            console.log(error.message)
        }
        
    }
  return (
    <div className=' w-full flex flex-col  justify-start'>
    {
        showPage && (
            <Sidebar >
            <Sidebar.Items>
                <Sidebar.ItemGroup className=' flex flex-col  items-start text-lg'>
                   <Link to={'/profile?tab=activity'} onClick={() => setShowPage(false)}>
                   <Sidebar.Item active = {tab === 'activity'}>
                        Activity
                   </Sidebar.Item>
                   </Link>
                   <Link to={'/profile?tab=saved'}  onClick={() => setShowPage(false)}>
                   <Sidebar.Item active = {tab === 'saved'}>
                        Saved
                   </Sidebar.Item>
                   </Link>
                   <Link to={'/profile?tab=aboutyouraccount'}  onClick={() => setShowPage(false)}>
                   <Sidebar.Item active = {tab === 'aboutyouraccount'}>
                        About your account
                   </Sidebar.Item>
                   </Link>
                   <Sidebar.Item>
                        <h1 className=' cursor-pointer' onClick={handelSignUp}>Logout</h1>
                   </Sidebar.Item>
                   <Sidebar.Item>
                        Delete Account
                   </Sidebar.Item>


                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

        )
    }
    </div>
  )
}

export default Dashsidebar