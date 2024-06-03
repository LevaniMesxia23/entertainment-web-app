import React from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import BookmarkEmpty from "../../public/starter-code/assets/icon-bookmark-empty.svg";
import Movie from "../../public/starter-code/assets/icon-category-movie.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

function TrendingSlider() {

  const trendingImages = (data as ImageData[]).filter(image => image.isTrending);  
  const isSmallDevice = useMediaQuery("only screen and (min-width : 768px)");

  return (
    <>
      <div>
        <h1 className='text-white text-[1.25rem] ml-4'>Trending</h1>
      </div>
      <div className='overflow-x-hidden'>
        <div className='flex p-4 gap-4 slide-track'>
          {trendingImages.map((image, index) => (
            <div key={index} className='flex-shrink-0 relative'>
              <div
                style={{ 
                  backgroundImage: `url(${isSmallDevice ? image.thumbnail.trending?.large : image.thumbnail.trending?.small})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                  height: isSmallDevice ? '230px' : '140px'
                }}
              >
                <div className='gap-[3.5rem] md:gap-[15rem] flex justify-between pb-6 pt-4 px-6 flex-row-reverse w-full h-full'>
                  <div className='bg-[#10141E] w-8 h-8 rounded-2xl opacity-[0.500647] flex justify-center items-center'>
                    <img src={BookmarkEmpty} alt=""/>
                  </div>
                  <div className='flex items-start flex-col mt-auto'>
                    <ul className='flex gap-2 items-center text-white opacity-75'>
                      <li>{image.year}</li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                      </svg>
                      <div className='flex items-center gap-[0.38rem]'>
                        <img src={Movie} alt="" className='w-3 h-3'/>
                        <li>{image.category}</li>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                      </svg>
                      <li>{image.rating}</li>
                    </ul>
                    <h2 className='text-white text-[1.5rem] whitespace-nowrap overflow-hidden overflow-ellipsis'>{image.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingSlider;
