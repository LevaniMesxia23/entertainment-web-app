import Movie from "../../public/starter-code/assets/Movie.svg"
import HomeImg from "../../public/starter-code/assets/icon-nav-home.svg"
import MoviesImg from "../../public/starter-code/assets/icon-nav-movies.svg"
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg"
import BookmarkImg from "../../public/starter-code/assets/icon-nav-bookmark.svg"
import AvatarImg from "../../public/starter-code/assets/image-avatar.png"
import SearchIcon from "../../public/starter-code/assets/icon-search.svg"
import { Link } from 'react-router-dom';
import { ImageData } from '../types'
import { useContext } from 'react'
import { MyContext } from '../App'

function Movies() {
  const { allMovies, setAllMovies } = useContext<any>(MyContext)
  const moviesImage = (allMovies as ImageData[]).filter(image => image.category === "Movie");

  const handleBookmarkClick = ( image?: ImageData) => {
    let mapped = allMovies.map((item: ImageData) => {
      if(item.title == image?.title){
        return {
          ...item, isBookmarked:!item.isBookmarked
        }
      }else{
        return item
      }
    })
    console.log(mapped)
    setAllMovies(mapped);
  };

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
          <div key={index} className='bg-gray-900 rounded-lg overflow-hidden bg-transparent relative'>
            <img className=' w-full' src={image.thumbnail.regular.small} alt="" />
            <svg onClick={() => handleBookmarkClick(image)} className='absolute top-2 right-2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E"/>
             {!image.isBookmarked ? 
             <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" stroke-width="1.5"/> 
            :
            <path d="M20.6094 9C20.7491 9 20.8828 9.02776 21.0104 9.08328C21.2109 9.16347 21.3704 9.28993 21.4889 9.46266C21.6074 9.63538 21.6667 9.82661 21.6667 10.0364V21.9636C21.6667 22.1734 21.6074 22.3646 21.4889 22.5373C21.3704 22.7101 21.2109 22.8365 21.0104 22.9167C20.895 22.9661 20.7613 22.9907 20.6094 22.9907C20.3177 22.9907 20.0655 22.892 19.8529 22.6946L15.8333 18.7713L11.8138 22.6946C11.5951 22.8982 11.3429 23 11.0573 23C10.9175 23 10.7839 22.9722 10.6562 22.9167C10.4557 22.8365 10.2962 22.7101 10.1777 22.5373C10.0592 22.3646 10 22.1734 10 21.9636V10.0364C10 9.82661 10.0592 9.63538 10.1777 9.46266C10.2962 9.28993 10.4557 9.16347 10.6562 9.08328C10.7839 9.02776 10.9175 9 11.0573 9H20.6094Z" fill="white"/>
            }
            </svg>
            <div>
            <div className='flex items-start flex-col mt-2'>
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