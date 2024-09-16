import React from 'react'
import Instalogo from '../instalogo.png'
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <div className='w-full flex justify-center  min-h-screen lg:items-center'>
      <div className="  bg-white flex flex-col lg:h-[70%]  mt-32 lg:mt-3   w-full lg:w-[38%] ">
       <form className="flex flex-col gap-3  justify-center mt-3" >
      <img src={Instalogo} alt="" className=' h-11 w-[172px] self-center'/>
      <span className=' text-center'>World's famous social media plateform millions user to used this app</span>
          <div  className='  flex justify-center h-[36px]'>
          <input      
           type="email"
            name="" 
            id="" 
             placeholder='email'
            className=' border border-black w-[80%] rounded-sm' />

          </div>

      <div className=" w-full flex justify-center mt-8 flex-col gap-2 items-center">
      <button className=' h-[43px] w-[136px] bg-green-500 rounded-lg'>Forget Password</button>
      <button className=' h-[43px] w-[136px] bg-green-500 rounded-lg'>
        <Link to={'/signin'}>SignIn</Link>
      </button>

      </div>
     
        </form>

      </div>
    </div>
  )
}

export default ForgetPassword