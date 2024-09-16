import React, { useState } from 'react'
import Instalogo from '../instalogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner';
import { convertToBase64 } from './fileUtility';

const SignUp = () => {
  const [username, setUsename] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate();

 const handelFileChane = async(e) => {
  const file = e.target.files[0]
  const  base64  = await convertToBase64(file)
  setProfilePicture(base64)
 }
  const handelSignup = async (e) => {
    e.preventDefault()
      navigate('/')
   
  }
  return (
    <div className='w-full flex justify-center  min-h-screen lg:items-center'>
      <div className="  bg-white flex flex-col lg:h-[70%]   w-full lg:w-[38%] mt-32 lg:mt-3">
        <form className="flex flex-col gap-3  justify-center mt-3" onSubmit={handelSignup} >
          <img src={Instalogo} alt="" className=' h-11 w-[172px] self-center' />
          <span className=' text-center'>World's famous social media plateform millions user to used this app</span>
          <div className=" flex justify-center h-[36px] mt-2 bg-slate-500">
            <input type="file" src="" alt=""
              onChange={handelFileChane}
            />
          </div>
          <div className='  flex justify-center h-[36px] mt-2'>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              placeholder='username'
              className=' border border-black w-[80%] rounded-sm '
              onChange={(e) => setUsename(e.target.value)}
            />

          </div>
          <div className='  flex justify-center h-[36px]'>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder='email'
              className=' border border-black w-[80%] rounded-sm'
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className='  flex justify-center h-[36px]'>
            <input
              value={password}
              type="text"
              name="password"
              id="password"
              placeholder='password'
              className=' border border-black w-[80%] rounded-sm'
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>
          <div className=" w-full flex justify-center mt-8">
            <button className=' h-[43px] w-[136px] bg-green-500 rounded-lg flex justify-center items-center'>
              {loading ? <TailSpin height='25' width='25' color='white' /> : 'SignUp'}
            </button>
          </div>

          <span className=' text-center'>Don't have an account?
            <Link to={'/signin'} >
              <span className=' hover:underline text-red-500 cursor-pointer'>SignIn</span>
            </Link>
          </span>
          {
            error && (
              <span className=' text-red-500 text-center'>{error}</span>
            )
          }
        </form>

      </div>
    </div>
  )
}

export default SignUp