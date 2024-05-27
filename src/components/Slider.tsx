import React from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import "../../public/starter-code/data.json"

function Slider() {
  const trendingImages = (data as ImageData[]).filter(image => image.isTrending);

  return (
    <div>
      <div className='p-4'>
        <h1 className='text-white text-[1.25rem]'>Trending</h1>
        <div>
          {trendingImages.map((image, index) => (
            <div key={index}>
              <h2>{image.title}</h2>
              {image.thumbnail.trending && (
                <img src={image.thumbnail.trending.small} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
