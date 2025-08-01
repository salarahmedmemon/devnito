'use client'

import { useEffect, useState } from 'react'
import { fetchSectionFour } from '@/sanity/lib/fetchSectionFour' 

const SectionFour = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetchSectionFour().then(setClients)
  }, [])

  return (
    <div className="sectFour relative overflow-hidden w-full h-[32vh] md:h-[80vh] bg-[#FFFAFE]">
      <img
        className="hidden sm:block md:block absolute bottom-[-50%] left-0"
        src="/img/sectThree/leftBottomCircle.png"
        alt=""
      />

      <div className="flex flex-col items-start gap-2 overflow-hidden pt-5 md:pt-25 relative">
        <img
          className="absolute hidden md:block top-[-28%] right-0"
          src="/img/sectThree/rightTopBorderCircle.png"
          alt=""
        />

        <div className="w-25 md:w-45 border-t-3 border-[#564689] mx-auto"></div>

        <h1 className="text-[#101421] w-95 mx-auto font-semibold text-lg md:text-[2.4vw] text-center">
          Our Clients
        </h1>

        <p className="text-[10px] px-6 sm:mx-auto md:text-lg md:font-light text-center">
          We are ready to uplift your brand like many others in the past!
        </p>

        {/* Clients Slider */}
        <div className="overflow-hidden w-full pt-5 sm:pt-8 md:pt-20">
          <div className="flex items-center gap-5 animate-slide w-max">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="clientOne w-[150px] h-[180px] md:h-[200px] relative flex-shrink-0"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={client.imageUrl}
                  alt={client.name || `Client ${index + 1}`}
                />

              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="text-white cursor-pointer bg-[#4C4886] px-4 py-2 md:px-10 md:py-3 rounded
        mx-auto absolute left-1/2 transform -translate-x-1/2 bottom-6"
      >
        Read More
      </button>
    </div>
  )
}

export default SectionFour
