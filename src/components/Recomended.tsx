import React from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import { useMediaQuery } from "@uidotdev/usehooks";
import BookmarkEmpty from "../../public/starter-code/assets/icon-bookmark-empty.svg";
import Movie from "../../public/starter-code/assets/icon-category-movie.svg";
import TvSeriesImg from "../../public/starter-code/assets/icon-nav-tv-series.svg"
import TvSeries from './TvSeries';

function Recommended() {
  const recommendedImages = (data as ImageData[]).filter(image => image.thumbnail?.regular);
  
  const isSmallDevice = useMediaQuery("only screen and (min-width : 768px)");

  return (
    <div>
      <div>
        <h1 className='text-white text-[1.25rem] mb-6 ml-4'>Recommended for you</h1>
      </div>

      <div className='px-4 grid grid-cols-2 md:grid-cols-3 gap-4'>
        {recommendedImages.map((image, index) => (
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
                        <img src={image.category === "Movie" ? Movie : TvSeriesImg} alt="" className='w-3 h-3'/>
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

export default Recommended;
