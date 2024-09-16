import { FileInput, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'

const Component = () => {
    const [selectFile, setSelectFile] = useState('')
    const [showFile, setShowFile] = useState('')

    const handelSelectFileChange = (e) => {
        const file = e.target.files[0]
        if(file){
            const render = new FileReader()
            render.onload = () => {
                setSelectFile(render.result)
            }
            render.readAsDataURL(file)
        }
    } 

    const handelSelectedFile = () => {
        setShowFile(selectFile)
    }
  return (
    <div className=' w-full  mt-16 min-h-screen'>
    <div className=" flex w-full justify-center gap-2 items-center ">
    <input 
    type="file"
     accept='image/*'
      onChange={handelSelectFileChange} 
        className=' w-[50%] p-2 rounded-md border-slate-400 border-[1px]'
      />
    <button onClick={handelSelectedFile}
     className=' h-10 w-28 bg-blue-500 rounded-md'
     >upload</button>

    </div>
    <div className=" flex justify-center mt-10 items-center w-[100%]">
    <img src={showFile} alt="post image" className=' object-contain w-72 h-72'  />
    </div>
    <div className=" w-full flex justify-center items-center mt-5">
    <Textarea className=' lg:w-[50%] w-[75%] rounded-md border-slate-500 border-[1px] h-24 font-serif' placeholder='write caption....'/>
    </div>

    <div className=" flex justify-center   w-full mt-10  mb-0 sm:mb-20">
      <button className=' h-10 lg:w-[94%]  w-[94%] lg:mb-0 mb-11  bg-blue-500 rounded-md text-white' >Share</button>
    </div>
    </div>
  )
}

export default Component