'use client'
import { useEffect, useState } from 'react'
import FaqCard from './FaqCard'
import { fetchSectionSix } from '@/sanity/lib/fetchSectionSix'

const SectionSix = () => {
  const [faqData, setFaqData] = useState([])

  useEffect(() => {
    fetchSectionSix().then(setFaqData)
  }, [])

  return (
    <div className="sectSix w-full md:h-[100vh] bg-[#001124]">
      <div className="flex bg-white flex-col items-start p-2 
      overflow-hidden pt-5 relative md:ps-20">
        <div className="w-10 md:w-20 sm:ml-5 border-t-3 border-[#4C4886]"></div>
        <h1 className="w-95 sm:ml-5 font-semibold">
          <span className="md:text-[2vw]">FAQ's</span> <br />
          <img className="md:w-100" src="/img/sectSix/faq.png" alt="" />
        </h1>
      </div>

      <div className="questions w-full md:w-[92vw] md:ps-20 sm:ps-20 h-full md:h-0 flex 
      flex-col md:flex-row md:flex-wrap md:justify-between gap-4 md:gap-0 p-5 md:mt-5 md:p-0">

        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            questionMobile={faq.questionMobile}
            questionDesktop={faq.questionDesktop}
            answer={faq.answer}
          />
        ))}

      </div>
    </div>
  )
}

export default SectionSix
