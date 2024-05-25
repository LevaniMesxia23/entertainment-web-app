import Movie from "../../public/starter-code/assets/Movie.svg"
import React, { useContext } from "react"
import { Mycontext } from "../App"

function SignUpFormPage() {
  const context = useContext(Mycontext)

  if(!context){
    throw new Error("FormPage must be used within a MycontextProvider");
  }
  const { show, setShow} = context
  return (
    <div className='flex justify-center items-center flex-col px-[1.5rem]'>
      <img src={Movie} alt="" className=" mt-12 mb-14"/>

      <div className='bg-[#161D2F] w-[100%] rounded-[0.625rem] flex flex-col px-[1.5rem] pt-[1.5rem] pb-[2rem]'>
      <span className='text-white text-[2rem] tracking-[-0.03125rem]'>Sign Up</span>
      <div className='flex justify-center flex-col gap-6 my-10'>
        <input type="email" placeholder='Email address' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white'/>
        <input type="password" placeholder='Password' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white'/>
        <input type="password" placeholder='Repeat Password' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white'/>
      <button className=' bg-[#FC4747] text-white rounded-[0.375rem] text-[0.9375rem] font-normal py-[0.90rem] mt-4'>Create an account</button>
      </div>
      
      <div className='flex justify-center gap-[0.56rem]'>
      <span className='text-white text-[0.9375rem]'>Already have an account?</span>
      <span className='text-[#FC4747] text-[0.9375] cursor-pointer' onClick={() => setShow(!show)}>Login</span>
      </div>
      </div>
    </div>
  )
}

export default SignUpFormPage