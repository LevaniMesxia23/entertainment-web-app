import React from 'react'
import Movie from "../../public/starter-code/assets/Movie.svg"
import HomeImg from "../../public/starter-code/assets/icon-nav-home.svg"
import MoviesImg from "../../public/starter-code/assets/icon-nav-movies.svg"
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg"
import BookmarkImg from "../../public/starter-code/assets/icon-nav-bookmark.svg"
import AvatarImg from "../../public/starter-code/assets/image-avatar.png"
import SearchIcon from "../../public/starter-code/assets/icon-search.svg"
import Slider from "./Slider"
import data from "../../public/starter-code/data.json"



function HomePage() {
  return (
    <>
    <header>
      <div className=' h-14 bg-[#161D2F] flex justify-between items-center px-4'>
        <img src={Movie} alt="" className='w-[1.5625rem]'/>
        <div className='flex gap-6 h-4'>
        <img src={HomeImg} alt="" />
        <img src={MoviesImg} alt="" />
        <img src={TvSeriesImg} alt="" />
        <img src={BookmarkImg} alt="" />
        </div>
        <img src={AvatarImg} alt="" className=' w-6 h-6 rounded-3xl'/>
      </div>
    </header>
    
    <div className='p-4'>
      <div className='flex gap-4 mt-6'>
        <img src={SearchIcon} alt="" className='w-6 h-6'/>
        <input type="text" placeholder='Search for movies or TV series' className='outline-none bg-transparent text-white w-[80%]'/>
      </div>
    </div>
    <Slider />
    </>
  )
}

export default HomePage