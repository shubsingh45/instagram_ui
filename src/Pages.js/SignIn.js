import React, { useState } from 'react'
import Instalogo from '../instalogo.png'
import { Link, useNavigate } from 'react-router-dom'
const SignIn = () => {
  const [username, setUsename] = useState('')
  const[password, setPassword] = useState('')
  const [error, setError] = useState('')

const navigate = useNavigate()
const handelSignIn = async(e) => {
  e.preventDefault()
  navigate('/')
  }
  return (
    <div className='w-full flex justify-center  min-h-screen lg:items-center'>
      <div className="  bg-white flex flex-col lg:h-[70%]   w-full lg:w-[38%]  mt-32 lg:mt-3">
       <form className="flex flex-col gap-3  justify-center mt-3"  onSubmit={handelSignIn}>
      <img src={Instalogo} alt="" className=' h-11 w-[172px] self-center'/>
      <span className=' text-center'>World's famous social media plateform millions user to used this app</span>
          <div className='  flex justify-center h-[36px] mt-2'>
            <input 
            type="text"
            value={username}
             name=""
              id=""
              placeholder='username'
              className=' border border-black w-[80%] rounded-sm ' 
                onChange={(e) => setUsename(e.target.value)}
              />
          </div>
          <div  className='  flex justify-center h-[36px]'>
          <input
          
           type="text"
           value={password}
            name="" 
            id="" 
             placeholder='password'
            className=' border border-black w-[80%] rounded-sm'
            onChange={(e) => setPassword(e.target.value)}
             />

          </div>
      <div className=" w-full flex justify-center mt-8">
     
      <button className=' h-[43px] w-[136px] bg-green-500 rounded-lg'>SignIn</button>
      </div>
      {
        error && (
          <span className=' text-center text-red-500'>{error}</span>
        )
      }
      
      <span className=' text-center'>Already have account?
      <Link to={'/signup'}>
       <span className=' hover:underline text-red-500 cursor-pointer'> SignUp</span>
       </Link></span>

      <Link to={'/forgetpassword'} className=' text-center'>
       <span className=' text-center hover:underline text-red-500 cursor-pointer'> Click here to Forget password</span>
       </Link>

        </form>

      </div>
    </div>
  )
}

export default SignIn