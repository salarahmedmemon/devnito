'use client'

import { useState, useEffect } from 'react'
import { fetchSectionThree } from '@/sanity/lib/fetchSectionThree'

const SectionThree = () => {
  const [section, setSection] = useState(null)

  useEffect(() => {
    fetchSectionThree().then(setSection)
  }, [])

  if (!section) return <div>Loading...</div>

  // Layout class patterns mapped to count
  const layoutClasses = {
    1: 'md:top-0 md:left-0 md:h-100 absolute sm:top-[-3%] sm:left-5 w-66 sm:h-90 h-100',
    2: 'md:top-0 md:left-70 md:w-104 absolute sm:top-[-3%] sm:left-75 w-100 sm:w-86 h-50',
    3: 'md:top-0 md:left-178 md:w-116 md:h-90 absolute top-[-3%] sm:left-75 right-10 w-118 h-80',
    4: 'md:top-104 md:left-0 absolute top-[51%] sm:left-5 sm:top-85 left-5 w-66 h-50',
    5: 'md:top-54 md:w-104 md:h-100 md:left-70 absolute top-[25%] sm:left-75 sm:top-129 sm:w-86 sm:h-50 right-132 w-100 h-100',
    6: 'md:top-94 md:w-116 md:h-60 md:left-178 absolute top-[41%] sm:w-66 sm:h-40 sm:left-5 sm:top-139 right-10 w-118 h-69'
  }

  // Overlay transition variations mapped to count
  const overlayClasses = {
    1: 'group-hover:w-[110%] group-hover:h-[110%] group-hover:bottom-[-50%] group-hover:right-[-25%]',
    2: 'group-hover:w-[60%] group-hover:h-[160%] group-hover:bottom-[-60%] group-hover:right-[-24%]',
    3: 'group-hover:w-[80%] group-hover:h-[170%] group-hover:bottom-[-80%] group-hover:right-[-24%]',
    4: 'group-hover:w-[70%] group-hover:h-[150%] group-hover:bottom-[-50%] group-hover:right-[-25%]',
    5: 'group-hover:w-[80%] group-hover:h-[150%] group-hover:bottom-[-80%] group-hover:right-[-24%]',
    6: 'group-hover:w-[80%] group-hover:h-[170%] group-hover:bottom-[-80%] group-hover:right-[-24%]'
  }

  let countTracker = 1

  return (
    <div className="sectThree w-full h-[58vh] md:pt-20 md:h-[150vh] bg-[#0B141E]">
      <div className="flex flex-col items-start gap-2 overflow-hidden pt-5 md:pt-0 relative">
        <img className="absolute md:hidden top-[-5%] right-1" src="/img/sectThree/rightSlider.png" alt="" />
        <img className="absolute md:hidden top-[57%] left-0" src="/img/sectThree/leftSlider.png" alt="" />

        <div className="w-25 sm:w-30 md:w-39 border-t-3 border-[#75CDF3] mx-auto"></div>

        <h1 className="text-white w-95 mx-auto font-semibold text-lg md:text-3xl text-center">
          {section.mainHeading} <br />
          <span className="text-[#75CDF3] text-2xl md:text-[3vw] font-bold">{section.subHeading}</span>
        </h1>

        <div className="projects w-full mt-4 md:mt-6 md:ms-15 mb-5 p-6 flex items-center justify-between">
          <div className="hidden sm:block md:block md:w-[90vw] md:relative md:h-full">
            <div className="projectsContainer relative w-full h-[120vh] bg-transparent">
              {section.projects.map((project, index) => {
                const layoutClass = layoutClasses[countTracker]
                const overlayClass = overlayClasses[countTracker]

                const projectComponent = (
                  <div
                    key={index}
                    className={`projectOne ${layoutClass} project-${index} gradient-border p-[.2vw] group overflow-hidden`}
                  >
                    <div
                      className={`h-full`}
                      style={{
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>

                      { (countTracker == 1) && 
                      
                        <div
                          className={`overlay absolute rounded-bl-full rounded-tl-full
                            w-0 h-0 bottom-0 right-0
                            transition-all duration-700 ease-in-out
                            ${overlayClass} 
                            text-white me-10 text-[12px] text-end`}
                        >
                          <h1 className="mt-10 me-20 text-[14px]">{project.title}</h1>
                          <span className="text-[#75CDF3] me-12 text-[10px]">{project.shortDetail}</span>
                          <p className="ms-12 text-[8px] mt-12 w-40 text-start">{project.description}</p>
                          <div className="links text-[8px] mt-14">
                            <span className="float-left ms-4">
                              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                                Visit Main Link
                              </a>
                            </span>
                            <span className="float-right me-9">
                              <a href={project.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                More Info
                              </a>
                            </span>
                          </div>
                        </div> ||

                        (countTracker == 2) && 
                      
                        <div
                          className={`overlay absolute rounded-bl-full rounded-tl-full
                            w-0 h-0 bottom-0 right-0
                            transition-all duration-700 ease-in-out
                            ${overlayClass} 
                            text-white me-10 text-[12px] text-end`}
                        >
                          <h1 className="mt-10 me-24 text-[14px]">{project.title}</h1>
                          <span className="text-[#75CDF3] me-18 text-[10px]">{project.shortDetail}</span>
                          <p className="ms-6 text-[8px] mt-6 w-40 text-start">{project.description}</p>
                          <div className="links text-[8px] mt-8">
                            <span className="float-left ms-4">
                              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                                Visit Main Link
                              </a>
                            </span>
                            <span className="float-right me-20">
                              <a href={project.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                More Info
                              </a>
                            </span>
                          </div>
                        </div> ||

                        (countTracker == 3) && 
                      
                        <div
                          className={`overlay absolute rounded-bl-full rounded-tl-full
                            w-0 h-0 bottom-0 right-0
                            transition-all duration-700 ease-in-out
                            ${overlayClass} 
                            text-white me-10 text-[12px] text-end`}
                        >
                          <h1 className="mt-14 me-26 text-[14px]">{project.title}</h1>
                          <span className="text-[#75CDF3] me-22 text-[10px]">{project.shortDetail}</span>
                          <p className="ms-18 text-[10px] mt-12 w-55 text-start">{project.description}</p>
                          <div className="links text-[8px] mt-28">
                            <span className="float-left ms-4">
                              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                                Visit Main Link
                              </a>
                            </span>
                            <span className="float-right me-20">
                              <a href={project.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                More Info
                              </a>
                            </span>
                          </div>
                        </div> ||

                        (countTracker == 4) && 
                      
                        <div
                          className={`overlay absolute rounded-bl-full rounded-tl-full
                            w-0 h-0 bottom-0 right-0
                            transition-all duration-700 ease-in-out
                            ${overlayClass} 
                            text-white me-10 text-[12px] text-end`}
                        >
                          <h1 className="mt-10 me-14 text-[12px]">{project.title}</h1>
                          <span className="text-[#75CDF3] me-9 text-[10px]">{project.shortDetail}</span>
                          <p className="ms-6 text-[8px] mt-6 w-40 text-start">{project.description}</p>
                          <div className="links text-[8px] mt-14">
                            <span className="float-left ms-4">
                              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                                Visit Main Link
                              </a>
                            </span>
                            <span className="float-right me-9">
                              <a href={project.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                More Info
                              </a>
                            </span>
                          </div>
                        </div> ||

                        (countTracker == 5) && 
                      
                        <div
                          className={`overlay absolute rounded-bl-full rounded-tl-full
                            w-0 h-0 bottom-0 right-0
                            transition-all duration-700 ease-in-out
                            ${overlayClass} 
                            text-white me-10 text-[12px] text-end`}
                        >
                          <h1 className="mt-10 me-20 text-[14px]">{project.title}</h1>
                          <span className="text-[#75CDF3] me-17 text-[10px]">{project.shortDetail}</span>
                          <p className="ms-20 text-[10px] mt-8 w-45 text-start">{project.description}</p>
                          <div className="links text-[8px] mt-24">
                            <span className="float-left ms-4">
                              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                                Visit Main Link
                              </a>
                            </span>
                            <span className="float-right me-18">
                              <a href={project.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                More Info
                              </a>
                            </span>
                          </div>
                        </div> ||

                        (countTracker == 6) && 
                      
                        <div
                          className={`overlay absolute rounded-bl-full rounded-tl-full
                            w-0 h-0 bottom-0 right-0
                            transition-all duration-700 ease-in-out
                            ${overlayClass} 
                            text-white me-10 text-[12px] text-end`}
                        >
                          <h1 className="mt-10 me-40 text-[14px]">{project.title}</h1>
                          <span className="text-[#75CDF3] me-28 text-[10px]">{project.shortDetail}</span>
                          <p className="ms-12 text-[8px] mt-8 w-40 text-start">{project.description}</p>
                          <div className="links text-[8px] mt-10">
                            <span className="float-left ms-4">
                              <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                                Visit Main Link
                              </a>
                            </span>
                            <span className="float-right me-20">
                              <a href={project.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                More Info
                              </a>
                            </span>
                          </div>
                        </div>

                      }
                  </div>
                )

                countTracker++
                if (countTracker > 6) countTracker = 1

                return projectComponent
              })}
            </div>
          </div>

          {/* Static fallback for mobile */}
          <div className="leftSide sm:hidden md:hidden w-full h-100 overflow-hidden">
            {[1, 2, 3].map(num => (
              <div key={num} className={`project${num} gradient-border w-40 mt-3 mb-3`}>
                <img src={`/img/sectThree/project${num}.png`} alt="" />
              </div>
            ))}
          </div>

          <div className="rightSide sm:hidden md:hidden w-full h-100">
            {[4, 5, 6].map(num => (
              <div key={num} className={`project${num} gradient-border w-40 mt-3 mb-3`}>
                <img src={`/img/sectThree/project${num}.png`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
