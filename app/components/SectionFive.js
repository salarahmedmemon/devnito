'use client'

import { useEffect, useState } from 'react'
import { fetchSectionFive } from '@/sanity/lib/fetchSectionFive'

const SectionFive = () => {
  const [sectionData, setSectionData] = useState({ title: '', stats: [] })

  useEffect(() => {
    fetchSectionFive().then(setSectionData)
  }, [])

  return (
    <div className="sectFive bg-[#0D111B] w-full h-[35vh] md:h-[55vh]">
      <div className="flex flex-col items-start gap-2 overflow-hidden pt-5 md:pt-20 relative">
        <div className="w-64 md:w-100 border-t-3 border-[#FFFFFF] mx-auto"></div>
        <h1 className="text-[#FFF] mx-auto sm:mx-auto sm:text-xl md:mx-auto md:text-[2.2vw] w-95 font-semibold text-lg text-center">
          {sectionData.title}
        </h1>
      </div>

      <div className="indicators w-full h-55 md:pb-30 flex items-center justify-center gap-3 md:gap-5 flex-wrap mt-2 p-5">
        {sectionData.stats.map((stat, index) => (
          <div key={index} className="indicate rounded-lg gradient-border p-[.3vw] md:p-[.2vw] w-[30%] h-16 sm:h-[11vw] md:rounded-lg md:w-[12%] md:h-25">

            <div className="block text-white md:hidden w-full h-full p-2 bg-[#141B22] rounded-lg">
              <span className="text-[2.6vw]">{stat.label}</span>
              {stat.imageUrl ? (
                <img className="mt-2 sm:mt-1" src={stat.imageUrl} alt={stat.label} />
              ) : (
                <h1 className="text-[4vw] mt-1 sm:mt-1 sm:text-[3.2vw]">{stat.value}</h1>
              )}
            </div>

            <div className="hidden md:block bg-[#141B22] text-white p-6 pt-4 w-38 h-24 rounded-lg">
              <span className="text-[12px]">{stat.label}</span>
              {stat.imageUrl ? (
                <img className="mt-2" src={stat.imageUrl} alt={stat.label} />
              ) : (
                <h1 className="text-[2vw]">{stat.value}</h1>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionFive
