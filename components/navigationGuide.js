import React from 'react'
import { Indicator } from './shared';
import { useEffect, useState } from "react";

function NavigationGuide() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${scrollY < 600 ? "absolute animate__text" : "fixed animate__component"}`}>
      <div className='flex relative h-full mt-20 space-x-4'>
        <span className='w-[2px] bg-dark-gray/30' />
        <span className={`absolute -left-5 ${scrollY < 600 ? "" : "transition-all duration-150"} ${scrollY < 600 && "top-[21px]"} ${(scrollY >= 600 && scrollY <= 1300) && "top-[75px]"} ${(scrollY >= 1300 && scrollY <= 2000) && "top-[130px]"} ${(scrollY > 2000) && "top-[183px]"}`}>
          <Indicator position="vertical" active={true} />
        </span>
        <ul className='space-y-9 py-4 text-xs font-semibold text-dark-gray'>
          <li onClick={() => window.scrollTo(0, 0)} className={`cursor-pointer transition-all duration-150 ${scrollY < 600 && "text-black text-sm"}`}>Introduction</li>
          <li onClick={() => window.scrollTo(0, 700)} className={`cursor-pointer transition-all duration-150 ${(scrollY >= 600 && scrollY <= 1300) && "text-black text-sm"}`}>Experiences</li>
          <li onClick={() => window.scrollTo(0, 1400)} className={`cursor-pointer transition-all duration-150 ${(scrollY >= 1300 && scrollY <= 2000) && "text-black text-sm"}`}>Skills and Projects</li>
          <li onClick={() => window.scrollTo(0, 2100)} className={`cursor-pointer transition-all duration-150 ${(scrollY > 2000) && "text-black text-sm"}`}>Footer</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationGuide;