import React from 'react'
import BigScreenHeader from '../Component.js/BigScreenHeader'
import SmallScreenHeader from '../Component.js/SmallScreenHeader'
import PrivateRoute from '../Component.js/PrivateRoute'
import ShowUserToFollw from '../Component.js/ShowUserToFollw'
import { useSelector } from 'react-redux'

const MainPage = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className="  sm:flex  md:flex-col sm:flex-col lg:flex lg:flex-row lg:justify-around">
    {/* {
      currentUser && (
        <> */}

        <BigScreenHeader/>
        <SmallScreenHeader/>
        {/* </>

      )
    } */}
        {/* <Home/> */}
        {/* <ShowUserToFollw/> */}
    </div>
  )
}


export default MainPage