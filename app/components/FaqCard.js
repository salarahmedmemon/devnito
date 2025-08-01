'use client';

import { useState } from 'react';

const FaqCard = ({ questionMobile, questionDesktop, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className="w-[90%] md:mt-10 md:rounded-lg md:w-[45%]">
      <div className="p-[2px] md:w-full md:p-1 rounded-lg gradient-border mb-1">
        <div className="bg-[#101828] md:w-full rounded-lg p-2 md:p-6">
          {/* Title and Button Row */}
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleFaq}>
            <div className="text-white">
              <h3 className="font-semibold md:hidden text-[12px]">
                {questionMobile}
              </h3>
              <h3 className="font-semibold hidden md:block text-lg">
                {questionDesktop}
              </h3>
            </div>

            <button
              className="w-6 md:w-10 h-6 md:h-10 bg-white text-black rounded text-xl font-bold flex items-center justify-center ml-4"
              onClick={(e) => {
                e.stopPropagation();
                toggleFaq();
              }}
            >
              {isOpen ? '-' : '+'}
            </button>
          </div>

          {/* Expandable Paragraph */}
          {isOpen && (
            <p className="mt-3 text-[12px] md:text-lg text-gray-100">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
