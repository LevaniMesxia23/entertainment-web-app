import Movie from "../../public/starter-code/assets/Movie.svg"
import HomeImg from "../../public/starter-code/assets/icon-nav-home.svg"
import MoviesImg from "../../public/starter-code/assets/icon-nav-movies.svg"
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg"
import BookmarkImg from "../../public/starter-code/assets/icon-nav-bookmark.svg"
import AvatarImg from "../../public/starter-code/assets/image-avatar.png"
import SearchIcon from "../../public/starter-code/assets/icon-search.svg"
import Slider from "./Slider"
import Recomended from './Recomended'
import { Link, useLocation } from 'react-router-dom';
import { MyContext } from '../App'
import { useContext } from 'react'


function HomePage() {
  const { search, setSearch } = useContext<any>(MyContext)
  let location = useLocation();
  console.log(location.pathname);
  
  return (
    <>
    <header>
      <div className=' h-14 bg-[#161D2F] flex justify-between items-center px-4'>
          <img src={Movie} alt="" className='w-[1.5625rem]'/>

        <div className='flex gap-6 h-4'>
        <Link to={"/home"}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill={location.pathname !== "/home" ? "#5A698F" : "white"}/></svg>
        </Link>
        <Link to={"/movies"}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className="hover:fill-red-500" d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill={location.pathname !== "/movies" ? "#5A698F" : "white"}/></svg>
        </Link>
        <Link to={"/tv-series"}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className="hover:fill-red-500" d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill={location.pathname !== "/tv-series" ? "#5A698F" : "white"}/></svg>
        </Link>
        <Link to={"/bookmarks"}>
        <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path className="hover:fill-red-500" d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill={location.pathname !== "/bookmarks" ? "#5A698F" : "white"}/></svg>
        </Link>
        </div>
        <img src={AvatarImg} alt="" className=' w-6 h-6 rounded-3xl'/>
      </div>
    </header>
    
    <div className='p-4'>
      <div className='flex gap-4 mt-6'>
        <img src={SearchIcon} alt="" className='w-6 h-6'/>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search for movies or TV series' className='outline-none bg-transparent text-white w-[80%]'/>
      </div>
    </div>
    <Slider />
    <Recomended />
    </>
  )
}

export default HomePage