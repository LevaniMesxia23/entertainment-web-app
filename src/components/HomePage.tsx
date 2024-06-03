import Movie from "../../public/starter-code/assets/Movie.svg"
import HomeImg from "../../public/starter-code/assets/icon-nav-home.svg"
import MoviesImg from "../../public/starter-code/assets/icon-nav-movies.svg"
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg"
import BookmarkImg from "../../public/starter-code/assets/icon-nav-bookmark.svg"
import AvatarImg from "../../public/starter-code/assets/image-avatar.png"
import SearchIcon from "../../public/starter-code/assets/icon-search.svg"
import Slider from "./Slider"
import Recomended from './Recomended'
import { Link } from 'react-router-dom';
import { MyContext } from '../App'
import { useContext } from 'react'


function HomePage() {
  const { search, setSearch } = useContext<any>(MyContext)
  console.log(search)
  return (
    <>
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
        <Link to={"/bookmarks"}>
        <img src={BookmarkImg} alt="" />
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