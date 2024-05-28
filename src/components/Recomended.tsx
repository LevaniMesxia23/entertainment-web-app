import React from 'react';
import data from "../../public/starter-code/data.json";
import { ImageData } from "../types";
import { useMediaQuery } from "@uidotdev/usehooks";

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
          <div key={index} className='bg-gray-900 rounded-lg overflow-hidden'>
            <div/>
            <img className=' w-full' src={image.thumbnail.regular.small} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
