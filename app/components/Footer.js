'use client';
import { useEffect, useState } from 'react';
import { fetchFooter } from '@/sanity/lib/fetchFooter';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetchFooter().then(setFooterData);
  }, []);

  if (!footerData) return null;

  return (
    <div className="sectSeven bg-[#001124] w-full md:h-[44vh]">
      <div className="flex flex-col items-start gap-2 overflow-hidden pt-5 relative">
        <div className="w-full gradient-border h-1 mx-auto"></div>
        <h1 className="w-95 sm:mx-auto md:mx-auto mt-2 font-semibold text-lg flex justify-center items-center">
          <img
            className="w-24 md:w-40"
            src={footerData.logoUrl}
            alt="Logo"
          />
        </h1>
      </div>

      <div className="navLinks w-full px-15 text-[10px] flex items-center justify-between gap-5 text-white p-2 md:pl-80 md:pr-80 mt-4">
        {footerData.navigationLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className={(index > 2 ? 'hidden md:block' : '')}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="socialLinks flex items-center justify-between w-50 h-15 mx-auto md:mb-5">
        {footerData.socialLinks.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
            <img className="w-10 h-10 rounded-lg" src={item.iconUrl} alt={`Social ${index + 1}`} />
          </a>
        ))}
      </div>

      <hr className="w-full h-1 bg-white mt-2" />

      <div className="copyright w-full h-10 text-[12px] md:text-[16px] flex items-center justify-center text-gray-100 mt-2">
        <span>&copy; Copyright Reserved 2024 | Terms &amp; Condition</span>
      </div>
    </div>
  );
};

export default Footer;
