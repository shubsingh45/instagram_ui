import React, { useState } from 'react'
import convertToBase64 from '../Component.js/AllPages.js/ImgaeUpload';
import { useSelector } from 'react-redux';
import image from '../Pages.js/image.jpg'
const EditProfile = () => {
  const{currentUser} = useSelector(state => state.user)
  const [file, setFile] = useState('')

  


  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }


  return (
    <div className=' lg:w-[60%] flex flex-col w-full items-center  sm:w-full min-h-screen sm:mt-12 md:mt-12 lg:mt-0 lg:ml-[256px]'>
              
                <div className=" w-full p-3 lg:w-[50%]  mt-4">
        <div className="profile flex justify-center items-center flex-col">
          <label htmlFor="profile">
            <img src={ file || image  } alt="profile pic"
              className="border-4 border-gray-50 shrink-100 w-[141px] h-[140px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" />
          </label>
          <input onChange={ onUpload} type='file' id='profile' name='profile' className="w-[80%] hidden" />
          <span className=' mt-2'>Profile picture</span>
        </div>
        <div className=" flex flex-col justify-center w-full gap-3 ">
          <div className=" flex flex-col">
            <label className=' text-gray-500'>Username</label>
            <input type="text" value={currentUser.username} className=' border-b text-blue-500 border-gray-400' />
          </div>
          <div className=" flex flex-col">
            <label>Bio</label>
            <input type="text" className=' border-b border-gray-400' />
          </div>
          <div className=" flex flex-col">
            <label>Add link</label>
            <input type="text" className=' border-b border-gray-400' />
          </div>

          <div className=" flex flex-row justify-between">
            <span>Gender</span>
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Custom">Custom</option>
              <option value="Not say">Not say</option>
            </select>
          </div>
          <div className=" flex justify-center items-center mt-9">
          <button className=' w-[70%] h-12 rounded-lg  bg-sky-500'>Update profile</button>
          </div>
        </div>

      </div>

                
    
    </div>

  )
}

export default EditProfile



{/* <div className=" w-full p-3 lg:w-[50%]  mt-4">
<div className="profile flex justify-center items-center flex-col">
  <label htmlFor="profile">
    <img src={file} alt="profile pic"
      className="border-4 border-gray-50 shrink-100 w-[141px] h-[140px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" />
  </label>
  <input onChange={onUpload} type='file' id='profile' name='profile' className="w-[80%] hidden" />
  <span className=' mt-2'>Profile picture</span>
</div>
<div className=" flex flex-col justify-center w-full gap-3 ">
  <div className=" flex flex-col">
    <label>Username</label>
    <input type="text" className=' border-b border-gray-400' />
  </div>
  <div className=" flex flex-col">
    <label>Bio</label>
    <input type="text" className=' border-b border-gray-400' />
  </div>
  <div className=" flex flex-col">
    <label>Add link</label>
    <input type="text" className=' border-b border-gray-400' />
  </div>

  <div className=" flex flex-row justify-between">
    <span>Gender</span>
    <select>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Custom">Custom</option>
      <option value="Not say">Not say</option>
    </select>
  </div>
  <div className=" flex justify-center items-center mt-9">
  <button className=' w-[70%] h-12 rounded-lg  bg-sky-500'>Update profile</button>
  </div>
</div>

</div> */}
