'use client';

import { useEffect, useState } from 'react';
import { fetchSectionOne } from '@/sanity/lib/fetchSectionOne';

const SectionOne = () => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    fetchSectionOne().then(setSection);
  }, []);

  if (!section) return <div>Loading...</div>;

  return (
    <div className="sectOne w-full h-60 sm:h-[40vh] md:flex md:h-[87vh] overflow-hidden relative">
      
      {/* Left Side */}
      <div className='leftSide'>
        <div className="relative z-20 text-white p-4 text-center sm:text-start md:text-start">
          
          <h1 className="bg-white z-20 text-[#4C4886] w-50 sm:w-62 md:w-82 h-10 sm:h-12 md:h-15 mx-auto sm:ms-5 md:ms-9 sm:mt-10 md:mt-25 font-bold text-center sm:text-3xl md:text-5xl sm:pt-2 md:pt-2 pt-2 rounded-lg">
            {section.heading}
          </h1>

          <span className="text-white font-bold text-4xl block mt-3 sm:ms-4 sm:text-[11vw] md:ms-9 md:text-[7.5vw]">
            {section.subHeading}
          </span>

          <p className="md:ms-9 md:font-light md:text-5xl sm:ms-[2.8vw] sm:text-2xl">
            {section.lineOne} <br />
            <span className="font-semibold sm:text-3xl">{section.lineTwo}</span>
          </p>

          <a href={section.buttonLink}>
            <button className="bg-white z-20 cursor-pointer text-[#4C4886] w-45 md:w-55 md:ms-9 md:mt-15 h-10 mx-auto font-bold text-center text-lg md:text-xl mt-4 rounded sm:ml-[3vw]">
              {section.buttonText}
            </button>
          </a>

        </div>
      </div>

      {/* Mobile Images Section */}
      <div className='flex lg:hidden w-70 h-full mx-auto gap-3 overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full'></div>
        <div className='firstColumn h-full w-[50%]'>
          <img
            className='absolute bg-repeat-y w-35 top-[-80%] sm:top-[-6.4vw]'
            src={section.rightImagesUrls?.[0]}
            alt=''
          />
        </div>
        <div className='secondColumn h-full w-[50%]'>
          <img
            className='absolute bg-repeat-y w-35 top-[-60%] sm:top-[-15.4vw]'
            src={section.rightImagesUrls?.[2]}
            alt=''
          />
        </div>
      </div>

      {/* Desktop Images Section */}
      <div className='hidden lg:flex rightSide w-full gap-5 justify-between items-center ms-60 h-full px-15'>
        <div className='firstColumn relative w-40 h-full top-[-2vw]'>
          <img src={section.rightImagesUrls?.[0]} alt='image' />
          <img src={section.rightImagesUrls?.[0]} alt='image' />
        </div>
        <div className='secondColumn relative w-40 h-full top-[-30vw]'>
          <img src={section.rightImagesUrls?.[1]} alt='image' />
          <img src={section.rightImagesUrls?.[1]} alt='image' />
        </div>
        <div className='thirdColumn relative w-40 h-full top-[-8vw]'>
          <img src={section.rightImagesUrls?.[2]} alt='image' />
          <img src={section.rightImagesUrls?.[2]} alt='image' />
        </div>
      </div>

    </div>
  );
};

export default SectionOne;
