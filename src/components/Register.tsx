import Movie from "../../public/starter-code/assets/Movie.svg"
import { useContext } from "react"
import { MyContext, FormData } from "../App"
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";

function SignUpFormPage() {
  const context = useContext(MyContext)
  const {register, handleSubmit, formState: {errors}, watch} = useForm<FormData>()
  const navigate = useNavigate();

  const onsubmit = async (data: {}) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate("/login");
  }

  const emailValidation = {
    required: "Can’t be empty",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Must be email address",
    },
  }

  const passwordValidation = {
    required: "Can’t be empty",
    minLength: {
      value: 8,
      message: "8 or more characters",
    },
  }

  const repeatPasswordValidation = {
    required: "Can’t be empty",
    validate: (value: string | undefined) => value === watch('password') || "Passwords do not match"
  }

  if(!context){
    throw new Error("FormPage must be used within a MycontextProvider");
  }
  return (
    <div className='flex justify-center items-center flex-col px-[1.5rem]'>
      <img src={Movie} alt="" className=" mt-12 mb-14"/>

      <div className='bg-[#161D2F] w-[100%] rounded-[0.625rem] flex flex-col px-[1.5rem] pt-[1.5rem] pb-[2rem]'>
      <span className='text-white text-[2rem] tracking-[-0.03125rem]'>Sign Up</span>
      <form onSubmit={handleSubmit(onsubmit)} className='flex justify-center flex-col gap-6 my-10'>
        <div className=" relative">
        <input {...register("email", {...emailValidation})} type="email" placeholder='Email address' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white relative w-[100%] outline-none'/>
        {errors.email ? <span className=' text-red-500 absolute right-2'>{errors.email?.message}</span> : null}
        </div>
        <div className='relative'>
        <input {...register("password", {...passwordValidation})} type="password" id='password' placeholder='Password' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white relative w-[100%] outline-none'/>
        {errors.password ? <span className=' text-red-500 absolute right-2'>{errors.password?.message}</span> : null}
        </div>
        <div className='relative'>
        <input {...register("repeatPassword", {...repeatPasswordValidation})} type="password" id='repeatPassword' placeholder='Repeat Password' className='bg-transparent opacity-50 border-b-[0.0625rem] pl-4 pb-[1rem] border-[#5A698F] text-white relative w-[100%] outline-none'/>
        {errors.repeatPassword ? <span className=' text-red-500 absolute right-2'>{errors.repeatPassword?.message}</span> : null}
        </div>
      <button className=' bg-[#FC4747] text-white rounded-[0.375rem] text-[0.9375rem] font-normal py-[0.90rem] mt-4'>Create an account</button>
      </form>
      
      <div className='flex justify-center gap-[0.56rem]'>
      <span className='text-white text-[0.9375rem]'>Already have an account?</span>
      <Link to={"/login"}>
      <span className='text-[#FC4747] text-[0.9375rem] cursor-pointer'>Login</span>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default SignUpFormPage
