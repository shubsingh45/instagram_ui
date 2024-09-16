import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AboutYourAccount, Activity, Saved } from '../Component.js/ShowMoreFun'
import Dashsidebar from '../Component.js/Dashsidebar'

const Dashboard = () => {
    const location = useLocation()
    const[tab, setTab] = useState('')

    useEffect(() => {
        const URLParams = new URLSearchParams(location.search)
        const tabFromUrl = URLParams.get('tab')
        if(tabFromUrl){
            setTab(tabFromUrl)
        }
        
    }, [location.search])
    
  return (
    <div className=' w-full '>
            <Dashsidebar/>
{tab === 'activity' && <Activity/>}
{tab === 'saved' && <Saved/>}
{tab === 'aboutyouraccount' && <AboutYourAccount/>}
        
    </div>
  )
}

export default Dashboard