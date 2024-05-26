import React, { useContext } from 'react';
import Movie from "../../public/starter-code/assets/Movie.svg"
import { Mycontext } from '../App'
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

function FormPage() {
  const context = useContext(Mycontext)
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()

  const onsubmit = async (data: {}) => {
    console.log(data);
  }

  const emailValidation = {
    required: "Can’t be empty",
    minLength: {
      value: 4,
      message: "Must be email",
    },
  }

  const passwordValidation = {
    required: "Can’t be empty",
    minLength: {
      value: 8,
      message: "8 or more character",
    },
  }

  if (!context) {
    throw new Error("FormPage must be used within a MycontextProvider");
  }
  const { show, setShow} = context
  return (
    <div className='flex justify-center items-center flex-col px-[1.5rem]'>
      <img src={Movie} alt="" className=" mt-12 mb-14"/>

      <div className='bg-[#161D2F] w-[100%] rounded-[0.625rem] flex flex-col px-[1.5rem] pt-[1.5rem] pb-[2rem]'>
      <span className='text-white text-[2rem] tracking-[-0.03125rem]'>Login</span>
      <form onSubmit={handleSubmit(onsubmit)} className='flex justify-center flex-col gap-6 my-10'>
        <div className='relative'>
        <input {...register("email", {...emailValidation})} type="email" id='email' placeholder='Email address' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white relative w-[100%] outline-none'
        />
        {errors.email ? <span className=' text-red-500 absolute right-2'>{errors.email?.message}</span> : null}
        </div>

        <div className='relative'>
        <input {...register("password", {...passwordValidation})} type="password" id='password' placeholder='Password' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white relative w-[100%] outline-none'/>
        {errors.password ? <span className=' text-red-500 absolute right-2'>{errors.password?.message}</span> : null}

        </div>

      <button type='submit' className=' bg-[#FC4747] text-white rounded-[0.375rem] text-[0.9375rem] font-normal py-[0.90rem] mt-4'>Login to your account</button>
      </form>
      
      <div className='flex justify-center gap-[0.56rem]'>
      <span className='text-white text-[0.9375rem]'>Don’t have an account?</span>
      <span className='text-[#FC4747] text-[0.9375] cursor-pointer' onClick={() => setShow(!show)}>Sign Up</span>
      </div>
      </div>
    </div>
  )
}

export default FormPage