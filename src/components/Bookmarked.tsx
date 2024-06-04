import Movie from "../../public/starter-code/assets/Movie.svg";
import HomeImg from "../../public/starter-code/assets/icon-nav-home.svg";
import MoviesImg from "../../public/starter-code/assets/icon-nav-movies.svg";
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg";
import BookmarkImg from "../../public/starter-code/assets/icon-nav-bookmark.svg";
import AvatarImg from "../../public/starter-code/assets/image-avatar.png";
import SearchIcon from "../../public/starter-code/assets/icon-search.svg";
import { Link } from 'react-router-dom';
import { MyContext } from "../App";
import { Key, useContext } from "react";
import { ImageData } from '../types'

function Bookmarked() {
  const { search, setSearch, allMovies, setAllMovies,handleBookmarkClick } = useContext<any>(MyContext);
  const moviesImage = (allMovies as ImageData[]).filter(image => image.category === "Movie");
  const tvSeriesImage = (allMovies as ImageData[]).filter(image => image.category === "TV Series");

  return (
    <div>
      <header>
        <div className='h-14 bg-[#161D2F] flex justify-between items-center px-4'>
          <img src={Movie} alt="" className='w-[1.5625rem]' />

          <div className='flex gap-6 h-4'>
          <Link to={"/home"}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className="hover:fill-red-500" d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill={location.pathname !== "/home" ? "#5A698F" : "white"}/></svg>
          </Link>
          <Link to={"/movies"}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className="hover:fill-red-500" d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill={location.pathname !== "/movies" ? "#5A698F" : "white"}/></svg>
          </Link>
            <Link to={"/tv-series"}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className="hover:fill-red-500" d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill={location.pathname !== "/tv-series" ? "#5A698F" : "white"}/></svg>  
            </Link>
            <Link to={"/bookmarks"}>
            <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill={location.pathname !== "/bookmarks" ? "#5A698F" : "white"}/></svg>
            </Link>
          </div>
          <img src={AvatarImg} alt="Avatar" className='w-6 h-6 rounded-3xl' />
        </div>
      </header>

      <div className='p-4'>
        <div className='flex gap-4 mt-6'>
          <img src={SearchIcon} alt="Search" className='w-6 h-6' />
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search for bookmarked shows' className='outline-none bg-transparent text-white w-[80%]' />
        </div>
      </div>
      <div className=' mb-6'>
        <h1 className='text-white text-[1.25rem] ml-4'>Bookmarked Movies</h1>
      </div>

      <div className='px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {moviesImage.filter((item) => {
          return search.toLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(search)
        })
          .filter((item: { isBookmarked: boolean; }) => item.isBookmarked)
          .map((image: any, index: Key | null | undefined) => (
            <div key={index} className='bg-gray-900 rounded-lg overflow-hidden bg-transparent relative'>
              <img className='w-full' src={image.thumbnail.regular.small} alt={image.title} />
              <svg onClick={() => handleBookmarkClick(image)} className='absolute top-2 right-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                {!image.isBookmarked ? 
                <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" strokeWidth="1.5"/> 
                :
                <path d="M20.6094 9C20.7491 9 20.8828 9.02776 21.0104 9.08328C21.2109 9.16347 21.3704 9.28993 21.4889 9.46266C21.6074 9.63538 21.6667 9.82661 21.6667 10.0364V21.9636C21.6667 22.1734 21.6074 22.3646 21.4889 22.5373C21.3704 22.7101 21.2109 22.8365 21.0104 22.9167C20.895 22.9661 20.7613 22.9907 20.6094 22.9907C20.3177 22.9907 20.0655 22.892 19.8529 22.6946L15.8333 18.7713L11.8138 22.6946C11.5951 22.8982 11.3429 23 11.0573 23C10.9175 23 10.7839 22.9722 10.6562 22.9167C10.4557 22.8365 10.2962 22.7101 10.1777 22.5373C10.0592 22.3646 10 22.1734 10 21.9636V10.0364C10 9.82661 10.0592 9.63538 10.1777 9.46266C10.2962 9.28993 10.4557 9.16347 10.6562 9.08328C10.7839 9.02776 10.9175 9 11.0573 9H20.6094Z" fill="white"/>}
              </svg>
              <div>
            <div className='flex items-start flex-col mt-2'>
                    <ul className='flex gap-2 items-center text-white opacity-75'>
                      <li className=' text-[0.6875rem]'>{image.year}</li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                      </svg>
                      <div className='flex items-center gap-[0.38rem]'>
                        <img src={TvSeriesImg} alt="" className='w-3 h-3'/>
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

      <div className=' mb-6'>
        <h1 className='text-white text-[1.25rem] ml-4 mt-6'>Bookmarked TV Series</h1>
      </div>

      <div className='px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {tvSeriesImage.filter((item) => {
          return search.toLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(search)
        })
          .filter((item: { isBookmarked: any; }) => item.isBookmarked)
          .map((image: any, index: Key | null | undefined) => (
            <div key={index} className='bg-gray-900 rounded-lg overflow-hidden bg-transparent relative'>
              <img className='w-full' src={image.thumbnail.regular.small} alt={image.title} />
              <svg onClick={() => handleBookmarkClick(image)} className='absolute top-2 right-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                {!image.isBookmarked ? 
                <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" strokeWidth="1.5"/> 
                :
                <path d="M20.6094 9C20.7491 9 20.8828 9.02776 21.0104 9.08328C21.2109 9.16347 21.3704 9.28993 21.4889 9.46266C21.6074 9.63538 21.6667 9.82661 21.6667 10.0364V21.9636C21.6667 22.1734 21.6074 22.3646 21.4889 22.5373C21.3704 22.7101 21.2109 22.8365 21.0104 22.9167C20.895 22.9661 20.7613 22.9907 20.6094 22.9907C20.3177 22.9907 20.0655 22.892 19.8529 22.6946L15.8333 18.7713L11.8138 22.6946C11.5951 22.8982 11.3429 23 11.0573 23C10.9175 23 10.7839 22.9722 10.6562 22.9167C10.4557 22.8365 10.2962 22.7101 10.1777 22.5373C10.0592 22.3646 10 22.1734 10 21.9636V10.0364C10 9.82661 10.0592 9.63538 10.1777 9.46266C10.2962 9.28993 10.4557 9.16347 10.6562 9.08328C10.7839 9.02776 10.9175 9 11.0573 9H20.6094Z" fill="white"/>}
              </svg>
              <div>
            <div className='flex items-start flex-col mt-2'>
                    <ul className='flex gap-2 items-center text-white opacity-75'>
                      <li className=' text-[0.6875rem]'>{image.year}</li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                      </svg>
                      <div className='flex items-center gap-[0.38rem]'>
                        <img src={TvSeriesImg} alt="" className='w-3 h-3'/>
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
    </div>
  );
}

export default Bookmarked;
