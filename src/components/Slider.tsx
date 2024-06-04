import { useContext } from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import Movie from "../../public/starter-code/assets/icon-category-movie.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import { MyContext } from '../App';

function TrendingSlider() {
  const { handleBookmarkClick } = useContext<any>(MyContext);
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
                  <svg
                  onClick={() => handleBookmarkClick(image)}
                  className='absolute top-2 right-2 cursor-pointer flex justify-center items-center'
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
            >
              <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
              {image.isBookmarked ? (
                <path d="M20.6094 9C20.7491 9 20.8828 9.02776 21.0104 9.08328C21.2109 9.16347 21.3704 9.28993 21.4889 9.46266C21.6074 9.63538 21.6667 9.82661 21.6667 10.0364V21.9636C21.6667 22.1734 21.6074 22.3646 21.4889 22.5373C21.3704 22.7101 21.2109 22.8365 21.0104 22.9167C20.895 22.9661 20.7613 22.9907 20.6094 22.9907C20.3177 22.9907 20.0655 22.892 19.8529 22.6946L15.8333 18.7713L11.8138 22.6946C11.5951 22.8982 11.3429 23 11.0573 23C10.9175 23 10.7839 22.9722 10.6562 22.9167C10.4557 22.8365 10.2962 22.7101 10.1777 22.5373C10.0592 22.3646 10 22.1734 10 21.9636V10.0364C10 9.82661 10.0592 9.63538 10.1777 9.46266C10.2962 9.28993 10.4557 9.16347 10.6562 9.08328C10.7839 9.02776 10.9175 9 11.0573 9H20.6094Z" fill="white"/>
              ) : (
                <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" strokeWidth="1.5"/>
              )}
            </svg>
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
