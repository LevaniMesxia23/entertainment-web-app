import React, { useState, useEffect } from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import "../../public/starter-code/data.json";
import BookmarkEmpty from "../../public/starter-code/assets/icon-bookmark-empty.svg"
import Movie from "../../public/starter-code/assets/icon-category-movie.svg"


function TrendingSlider() {


  const trendingImages = (data as ImageData[]).filter(image => image.isTrending);  

  return (
    <div>
      <div className='p-4 flex flex-col'>
        <div>
        <h1 className='text-white text-[1.25rem] mb-[1.56rem]'>Trending</h1>
        </div>
        <div className='flex'>
        {trendingImages.map((image, index) => (
            <div key={index} className='flex flex-row justify-center'>
              <div
                style={{ 
                  backgroundImage: `url(${window.innerWidth >= 768 ? image.thumbnail.trending?.large : image.thumbnail.trending?.small})`,
                  backgroundSize: 'cover',
                  borderRadius: '8px',
                  marginRight: "0.5rem",
                  height: "14.375rem"
                }}
              >
                <div className='gap-[15rem] flex justify-between pb-6 pt-4 px-6 flex-row-reverse w-full h-full'>
                  <div className='bg-[#10141E] w-8 h-8 rounded-2xl opacity-[0.500647] flex justify-center items-center'>
                    <img src={BookmarkEmpty} alt=""/>
                  </div>

                  <div className=' flex items-start flex-col mt-auto '>
                     <ul className='flex gap-2 items-center text-white opacity-75'>
                    <li>{image.year}</li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                    <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                    </svg>
                    <div className='flex items-center gap-[0.38rem]'>
                      <img src={Movie} alt="" className=' w-3 h-3'/>
                      <li>{image.category}</li>
                    </div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                    <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/>
                    </svg>
                    <li>{image.rating}</li>
                  </ul>
                  <h2 className='text-white text-[1.5rem] whitespace-nowrap overflow-hidden text-overflow-ellipsis'>{image.title}</h2>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
          
      </div>
    </div>
  );
}

export default TrendingSlider;
