import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex h-5 cursor-pointer items-center gap-3 md:absolute md:right-1/4"
    >
      <div className="flex h-6 w-6 items-center justify-center">
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 14.5L12 10.5L8 14.5"
            stroke="#013A67"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="Sans 3'] font-['Source text-sm leading-[150%] text-[#13161a]">
        Voltar ao topo
      </div>
    </button>
  );
};

export default ScrollToTopButton;
