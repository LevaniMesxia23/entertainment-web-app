import React from 'react'
import Movie from "../../public/starter-code/assets/Movie.svg"
import HomeImg from "../../public/starter-code/assets/icon-nav-home.svg"
import MoviesImg from "../../public/starter-code/assets/icon-nav-movies.svg"
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg"
import BookmarkImg from "../../public/starter-code/assets/icon-nav-bookmark.svg"
import AvatarImg from "../../public/starter-code/assets/image-avatar.png"
import SearchIcon from "../../public/starter-code/assets/icon-search.svg"
import Slider from "./Slider"
import Recomended from './Recomended'
import { Link, useNavigate } from 'react-router-dom';
import data from "../../public/starter-code/data.json"
import { ImageData } from '../types'

function Movies() {
  const moviesImage = (data as ImageData[]).filter(image => image.category === "Movie");
  return (
    <>
    <div>
    <header>
      <div className=' h-14 bg-[#161D2F] flex justify-between items-center px-4'>
          <img src={Movie} alt="" className='w-[1.5625rem]'/>
        <div className='flex gap-6 h-4'>
        <Link to={"/home"}>
        <img src={HomeImg} alt="" />
        </Link>
        <Link to={"/movies"}>
        <img src={MoviesImg} alt="" />
        </Link>
        <Link to={"/tv-series"}>
        <img src={TvSeriesImg} alt="" />
        </Link>
        <img src={BookmarkImg} alt="" />
        </div>
        <img src={AvatarImg} alt="" className=' w-6 h-6 rounded-3xl'/>
      </div>
    </header>
    
    <div className='p-4'>
      <div className='flex gap-4 mt-6'>
        <img src={SearchIcon} alt="" className='w-6 h-6'/>
        <input type="text" placeholder='Search for movies' className='outline-none bg-transparent text-white w-[80%]'/>
      </div>
    </div>

    <div className=' mb-6'>
        <h1 className='text-white text-[1.25rem] ml-4'>Movies</h1>
      </div>
    </div>

    <div className='px-4 grid grid-cols-2 md:grid-cols-3 gap-4'>
        {moviesImage.map((image, index) => (
          <div key={index} className='bg-gray-900 rounded-lg overflow-hidden bg-transparent'>
            <img className=' w-full' src={image.thumbnail.regular.small} alt="" />
            <div>
            <div className='flex items-start flex-col mt-auto mt-2'>
                    <ul className='flex gap-2 items-center text-white opacity-75'>
                      <li className=' text-[0.6875rem]'>{image.year}</li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                      </svg>
                      <div className='flex items-center gap-[0.38rem]'>
                        <img src={MoviesImg} alt="" className='w-3 h-3'/>
                        <li className=' text-[0.6875rem]'>{image.category}</li>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                      </svg>
                      <li className=' text-[0.6875rem]'>{image.rating}</li>
                    </ul>
                    <h2 className='text-white text-[0.875rem] whitespace-nowrap overflow-hidden overflow-ellipsis'>{image.title}</h2>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Movies