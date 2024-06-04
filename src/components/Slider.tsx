import { useContext } from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import Movie from "../../public/starter-code/assets/icon-category-movie.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import { MyContext } from '../App';

function TrendingSlider() {
  useContext<any>(MyContext);
  const trendingImages = (data as ImageData[]).filter(image => image.isTrending);  
  const isSmallDevice = useMediaQuery("only screen and (min-width : 768px)");

  return (
    <>
      <div>
        <h1 className='text-white text-[1.25rem] ml-4 lg:ml-[10.25rem]'>Trending</h1>
      </div>
      <div className='overflow-x-hidden lg:ml-[10.25rem]'>
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
                  <div className=' w-8 h-8 rounded-2xl '>
                  
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
