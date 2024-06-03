import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Movie from '../../public/starter-code/assets/Movie.svg';
import { MyContext, FormData } from '../App';

const emailValidation = {
  required: "Can’t be empty",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Must be a valid email address",
  },
};

const passwordValidation = {
  required: "Can’t be empty",
  minLength: {
    value: 8,
    message: "Must be 8 or more characters",
  },
};

function FormPage() {
  const context = useContext(MyContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (data.email === user.email && data.password === user.password) {
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No registered user found");
    }
  };

  if (!context) {
    throw new Error("FormPage must be used within a MyContextProvider");
  }

  return (
    <div className='flex justify-center items-center flex-col px-6'>
      <img src={Movie} alt="Movie" className="mt-12 mb-14" />

      <div className='bg-[#161D2F] w-full rounded-lg flex flex-col px-6 pt-6 pb-8'>
        <span className='text-white text-2xl tracking-tight'>Login</span>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 my-10'>
          <div className='relative'>
            <label htmlFor='email' className='sr-only'>Email address</label>
            <input
              {...register("email", emailValidation)}
              type="email"
              id='email'
              placeholder='Email address'
              className='bg-transparent opacity-50 border-b border-[#5A698F] pl-4 pb-4 text-white w-full outline-none'
            />
            {errors.email && <span className='text-red-500 absolute right-2'>{errors.email.message}</span>}
          </div>

          <div className='relative'>
            <label htmlFor='password' className='sr-only'>Password</label>
            <input
              {...register("password", passwordValidation)}
              type="password"
              id='password'
              placeholder='Password'
              className='bg-transparent opacity-50 border-b border-[#5A698F] pl-4 pb-4 text-white w-full outline-none'
            />
            {errors.password && <span className='text-red-500 absolute right-2'>{errors.password.message}</span>}
          </div>

          <button type='submit' className='bg-[#FC4747] text-white rounded-md text-lg py-4 mt-4'>
            Login to your account
          </button>
        </form>

        <div className='flex justify-center gap-2'>
          <span className='text-white text-lg'>Don’t have an account?</span>
          <Link to="/register">
            <span className='text-[#FC4747] text-lg cursor-pointer'>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
