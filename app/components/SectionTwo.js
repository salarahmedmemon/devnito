'use client'

import { useEffect, useState } from 'react'
import { fetchSectionTwo } from '@/sanity/lib/fetchSectionTwo'

const SectionTwo = () => {
  const [section, setSection] = useState(null)

  useEffect(() => {
    fetchSectionTwo().then(setSection)
  }, [])

  if (!section) return <div>Loading...</div>

  return (
    <div className="sectTwo bg-[#EEEEEE] w-full h-[67vh] md:h-[100vh] text-center overflow-hidden">
      <div className="flex flex-col items-start gap-2 pt-5 relative">

        <div className="w-50 md:w-80 border-t-3 border-[#4C4886] mx-auto"></div>

        <h1 className="text-black font-semibold text-xl md:text-3xl mx-auto">
          {section.mainHeading}<br />
          <span className="text-[#4C4886] text-2xl md:text-5xl font-bold">
            {section.subHeading}
          </span>
        </h1>

        {/* Circle Image */}
        {section.circleImageUrl && (
          <img
            src={section.circleImageUrl}
            className="circle w-60 md:w-80 md:h-80 h-60 rounded-full absolute top-[-10%] md:top-[5%] right-[-45%] md:right-[-13%] sm:top-[-5%] sm:right-[-18%]"
            alt=""
          />
        )}

        {/* Button Links */}
        <div className="content w-full md:mt-5 h-10 flex items-center justify-between gap-2 p-3 text-[8px] md:text-[12px] overflow-hidden md:flex-wrap">
          {(section.buttonLinks || []).map((linkText, idx) => (
            <a
              key={idx}
              href="#"
              className="block" // fallback class as per original design (adjust if needed)
            >
            {linkText === 'IT Resource' ? <span className='font-semibold'>{linkText}</span>:<span>{linkText}</span> }
            </a>
          ))}
        </div>

        {/* Main Image */}
        {section.mainImageUrl && (
          <img
            className="mx-auto w-100 md:absolute md:left-[-2%] md:top-50 md:w-[48%]"
            src={section.mainImageUrl}
            alt=""
          />
        )}

        {/* IT Resources Section */}
        <div className="itResources md:absolute md:right-0 md:top-60 md:w-[60%] p-5 md:p-0 md:ps-10 text-start">
          <h1 className="text-lg md:text-4xl font-semibold">
            {section.resourcesHeading}
          </h1>

          <p className="hidden md:block md:text-[12px] md:mt-2">
            {section.resourcesDescription}
          </p>

          {/* Static subheading (if applicable) */}
          <h2 className="text-[#4C4886] mt-3 text-[12px] font-semibold">
            Cost-effective and Comprehensive IT Outsourcing Services:
          </h2>

          {/* SubServices List (Desktop) */}
          <ul className="hidden md:flex md:items-center md:justify-between md:gap-5 md:text-[12px] p-5 pt-0">
            {(section.subServices || []).map((serviceGroup, idx) => (
              <div key={idx} className="div mt-3 list-disc">
                {(serviceGroup.items || []).map((item, i) => (
                  <li key={i} className="mb-1">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </div>
            ))}
          </ul>

          {/* Mobile Version (Optional, static fallback) */}
          <ul className="flex md:hidden items-center justify-between gap-5 text-[8.5px] p-5 pt-0">
            <div className="div mt-3 list-disc">
              <li><a href="#">Hire Mobile App Developer</a></li>
              <li><a href="#">Hire Scrum Master in Dubai</a></li>
              <li><a href="#">Hire AWS Resources in Dubai</a></li>
              <li><a href="#">Hire QA Resources in Dubai</a></li>
            </div>
            <div className="div list-disc">
              <li><a href="#">Hire React JS Developers in Dubai</a></li>
              <li><a href="#">Hire React Native Developers in Dubai</a></li>
              <li><a href="#">Hire Sharepoint Developers in Dubai</a></li>
            </div>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default SectionTwo
