'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const SectionTwo = () => {
  const links = [
    { href: '#', text: 'Digital Branding & Communication' },
    { href: '#', text: 'Web Development' },
    { href: '#', text: 'Video Animation' },
    { href: '#', text: 'Digital Marketing' },
    { href: '#', text: 'IT Resource' },
    { href: '#', text: 'UI/UX Design' },
    { href: '#', text: 'Mobile App Development' },
    { href: '#', text: 'E-Commerce Web Development' },
    { href: '#', text: 'Emerging Tech Development' },
  ];

  const contentData = [
    {
      title: 'Digital Branding & Communication',
      image: '/img/sectTwo/dbc.jpeg',
      description: `Promote your business to the masses and build a strong reputation in the Market
      with our branding and communication services. Now you can focus on meeting
      the bottom line while we get your branding message across to the target audience.
      We have a knack for crafting memorable brand stories that win you lifelong customers and boost engagement for your brand.`,
      listTitle: 'Creating Branding & Communication Agency for Curious Minds:',
      listItems: [
        'Company Profile & Brochure Design',
        'Business Card Design',
        'Corporate Identity Design',
        'Packaging Design',
        'Logo Design',
      ],
    },
    // ... other contentData entries unchanged ...
    {
      title: 'Web Development',
      image: '/img/sectTwo/rwd.jpeg',
      description: `Our web development team delivers fast, secure, and scalable websites tailored for your business needs.`,
      listTitle: 'Building Web Solutions that Perform:',
      listItems: [
        'Responsive Website Design',
        'E-Commerce Development',
        'Content Management Systems',
        'Performance Optimization',
        'SEO Friendly Design',
      ],
    },
    {
      title: 'Video Animation',
      image: '/img/sectTwo/va.jpeg',
      description: `Engaging and creative video animations to communicate your message effectively.`,
      listTitle: 'Our Video Animation Services Include:',
      listItems: [
        '2D Animation',
        '3D Animation',
        'Motion Graphics',
        'Explainer Videos',
        'Visual Effects',
      ],
    },
    {
      title: 'Digital Marketing',
      image: '/img/sectTwo/dm.jpeg',
      description: `Comprehensive digital marketing strategies focused on growth and ROI.`,
      listTitle: 'Digital Marketing Tactics We Use:',
      listItems: [
        'Social Media Marketing',
        'Email Campaigns',
        'Pay-Per-Click Advertising',
        'Content Marketing',
        'Influencer Outreach',
      ],
    },
    {
      title: 'IT Resource',
      image: '/img/sectTwo/itr.jpeg',
      description: `Providing expert IT resources for your project needs, scaling teams quickly.`,
      listTitle: 'IT Resource Services:',
      listItems: [
        'IT Staffing Solutions',
        'Project Management',
        'Technical Support',
        'Cloud Infrastructure',
        'Cybersecurity',
      ],
    },
    {
      title: 'UI/UX Design',
      image: '/img/sectTwo/uiux.jpeg',
      description: `User interface and experience design that delights customers and drives engagement.`,
      listTitle: 'Our UI/UX Design Expertise:',
      listItems: [
        'Wireframing & Prototyping',
        'User Research & Testing',
        'Interaction Design',
        'Visual Design',
        'Accessibility Compliance',
      ],
    },
    {
      title: 'Mobile App Development',
      image: '/img/sectTwo/mad.jpeg',
      description: `Building performant mobile applications for iOS and Android platforms.`,
      listTitle: 'Mobile Applications We Build:',
      listItems: [
        'Native iOS & Android',
        'Cross-platform Apps',
        'App Store Deployment',
        'Maintenance & Updates',
        'User Analytics Integration',
      ],
    },
    {
      title: 'E-Commerce Web Development',
      image: '/img/sectTwo/ewd.jpeg',
      description: `End-to-end e-commerce solutions that grow your online business.`,
      listTitle: 'E-Commerce Services Included:',
      listItems: [
        'Online Store Setup',
        'Payment Gateway Integration',
        'Inventory Management',
        'Custom Plugins & Modules',
        'Customer Portal Development',
      ],
    },
    {
      title: 'Emerging Tech Development',
      image: '/img/sectTwo/etd.jpeg',
      description: `Innovative solutions using blockchain, AI, and other emerging technologies.`,
      listTitle: 'Technologies We Work With:',
      listItems: [
        'Blockchain Development',
        'Artificial Intelligence',
        'Internet of Things',
        'Augmented & Virtual Reality',
        'Big Data Solutions',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(4); // Initially IT Resource
  const [translateX, setTranslateX] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isCentering, setIsCentering] = useState(false);

  const navListRef = useRef(null);
  const animationFrameId = useRef(null);
  const animationSpeed = 1; // pixels per frame

  const pauseAnimation = () => setAnimating(false);

  useEffect(() => {
    if (isCentering || !animating) return;

    const listWidth = navListRef.current?.scrollWidth / 2 || 0;

    const step = () => {
      setTranslateX((prev) => {
        let next = prev - animationSpeed;
        if (Math.abs(next) > listWidth) {
          return 0;
        }
        return next;
      });
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [animating, isCentering]);

  const handleClick = (index) => {
    if (!navListRef.current) return;

    setAnimating(false);
    setIsCentering(true);
    setActiveIndex(index);

    const containerWidth = navListRef.current.parentElement.offsetWidth;
    const linksElements = navListRef.current.querySelectorAll('li');
    const clickedLink = linksElements[index];
    if (!clickedLink) return;

    const leftPos = clickedLink.offsetLeft;
    const linkWidth = clickedLink.offsetWidth;

    const targetTranslateX = leftPos - containerWidth / 2 + linkWidth / 2;

    const animationDuration = 800;
    const fps = 60;
    const totalFrames = (animationDuration / 1000) * fps;
    let frame = 0;

    const startTranslateX = translateX;
    const deltaX = -targetTranslateX - startTranslateX;

    const animateToCenter = () => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = easeOutCubic(progress);

      const currentTranslateX = startTranslateX + deltaX * easeProgress;
      setTranslateX(currentTranslateX);

      if (frame < totalFrames) {
        animationFrameId.current = requestAnimationFrame(animateToCenter);
      } else {
        setIsCentering(false);
        setAnimating(false);
      }
    };

    animationFrameId.current = requestAnimationFrame(animateToCenter);
  };

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  const currentContent = contentData[activeIndex];

  return (
    <div className="w-full h-sreen md:min-h-screen overflow-hidden relative bg-white">
      <img className="absolute top-0 right-0 w-30" src="/img/sectTwo/circle.png" alt="circle" />
      <img className="hidden md:block absolute bottom-[-30%] left-0 w-120" src="/img/sectTwo/secondCircle.png" alt="circle" />

      <div className="flex flex-col items-center justify-center pt-4">
        <div className="line w-50 md:w-72 h-1 bg-[#4C4886]"></div>
        <h1 className="md:text-2xl md:font-bold">Services We Offering</h1>
        <h2 className="md:text-3xl text-[#4C4886] text-lg font-bold md:font-extrabold">
          Certified Excellence
        </h2>
      </div>

      {/* Navigation with horizontal scroll on small screens */}
      <div className="nav-wrapper w-full overflow-hidden relative pt-20">
        <ul
          className="nav-list flex whitespace-nowrap gap-8 pt-5 md:pt-0 text-[10px] sm:text-xs md:text-lg
            overflow-x-auto no-scrollbar scroll-smooth"
          ref={navListRef}
          onMouseEnter={pauseAnimation}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isCentering ? 'none' : 'transform 0.5s ease',
            /* Disable user select on small scroll */
            userSelect: 'none',
          }}
        >
          {[...links, ...links].map((link, i) => (
            <li
              key={i}
              className={`nav-item inline-block cursor-pointer ${
                i % links.length === activeIndex ? 'font-bold text-[#4C4886]' : 'text-black opacity-70'
              }`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload/navigation
                  if (!isCentering) {
                    handleClick(i % links.length);
                  }
                }}
                className="px-2 py-1 whitespace-nowrap inline-block"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic 3-column content */}
      {currentContent && (
        <div
          className={`w-full mt-10 flex items-center p-6 gap-4
          flex-col sm:flex-col md:flex-row
          h-auto sm:h-auto md:h-96
        `}
        >
          {/* First Column - Image */}
          <div className="flex justify-center items-center w-full sm:w-full md:w-200 md:rounded-lg mt-6 md:mt-20 bg-white rounded">
            <img className='md:rounded-lg md:me-50'
              src={currentContent.image}
              alt={currentContent.title}
              // className="max-w-full h-auto sm:max-w-xs md:max-w-none"
            />
          </div>

          {/* Second Column - Content */}
          <div className="flex flex-col w-full md:ps-20 sm:w-full md:w-200 justify-center bg-white rounded p-4">
            <h2 className="text-lg font-bold mb-2 md:text-left">
              <span className="text-[#071652]">|</span> {currentContent.title}
            </h2>
            <p className="text-sm">{currentContent.description}</p>

            <span className="text-[#071652] font-bold text-sm mt-8">{currentContent.listTitle}</span>

            <ul className="list-disc list-inside mt-6 text-[12px] md:text-sm flex flex-wrap justify-start items-center gap-2">
              {currentContent.listItems.map((item, idx) => (
                <li key={idx}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column - Circles */}
          <div className="flex flex-row sm:flex-row md:flex-col border p-2 rounded-2xl justify-center items-center space-x-4 md:space-x-0 md:space-y-4 mt-6 md:mt-0 w-full sm:w-full md:w-auto">
            {contentData.map((_, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full border-1 ${
                  idx === activeIndex ? 'bg-blue-950' : 'bg-transparent'
                }`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
