import React from 'react'
import Link from './Link'
import { Indicator } from './shared';
import useGetScrollView from '../hooks/useGetScrollView';

function NavigationGuide({
  idExperience,
  idSkillsAndProject,
  idFooter
}) {
  const [scrollY] = useGetScrollView();

  return (
    <div className={`lg:left-7 xl:left-auto ${scrollY < 600 ? "absolute animate__text" : "fixed animate__component"}`}>
      <div className='flex relative h-full mt-20 space-x-4'>
        <span className='w-[2px] bg-dark-gray/30' />
        <span className={`absolute -left-5 ${scrollY < 600 ? "" : "transition-all duration-150"} ${scrollY < 600 && "top-[21px]"} ${(scrollY >= 600 && scrollY <= 1300) && "top-[75px]"} ${(scrollY >= 1300 && scrollY <= 2000) && "top-[130px]"} ${(scrollY > 2000) && "top-[183px]"}`}>
          <Indicator position="vertical" active={true} />
        </span>
        <ul className='space-y-9 py-4 text-xs font-semibold text-dark-gray'>
          <li onClick={() => window.scrollTo(0, 0)} className={`cursor-pointer transition-all duration-150 ${scrollY < 600 && "text-black text-sm"}`}>Introduction</li>
          <Link to={`#${idExperience}`}>
            <li className={`cursor-pointer mt-9 transition-all duration-150 ${(scrollY >= 600 && scrollY <= 1300) && "text-black text-sm"}`}>Experiences</li>
          </Link>
          <Link to={`#${idSkillsAndProject}`}>
            <li className={`cursor-pointer mt-9 transition-all duration-150 ${(scrollY >= 1300 && scrollY <= 2000) && "text-black text-sm"}`}>Skills and Projects</li>
          </Link>
          <Link to={`#${idFooter}`}>
            <li className={`cursor-pointer mt-9 transition-all duration-150 ${(scrollY > 2000) && "text-black text-sm"}`}>Footer</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavigationGuide;