import Image from "next/image";
import CenterContent from "../components/centerContent";
import React from "react"
import { ArrowRightIcon } from '@heroicons/react/solid'
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <React.Fragment>
      <CenterContent className="flex items-center justify-center divide-x-2">
        <div className='col-span-1 pr-8 flex items-center justify-end'>
          <Image src="/profile-home.svg" layout="fixed" width="320" height="320" />
        </div>
        <div className='col-span-1 pl-8 flex flex-col items-start justify-center'>
          <h1 className='text-[26px] leading-8 font-medium'>I am a <span className='text-brown font-semibold'>Front-end</span> Engineer <br /> & Design Enthusiast</h1>
          <p className='text-sm mt-7 leading-6'>After I graduated from college, I decided to further develop myself into the digital world which I think is more promising for my future career. Previously, I had expertise in graphic design such as Adobe Illustrator. After joining the Job Connector Web Development program, I have a new skill, namely web programming using javascript language, and an interest in the frontend developer job position.</p>
          <button className='mt-4 bg-black px-8 py-3 rounded-full text-light-gray text-xs flex space-x-3 items-center'>
            <span>Project</span>
            <ArrowRightIcon className="w-[13px] h-[13px]" />
          </button>

          <div className="flex justify-between space-x-2 mt-6">
            <div className='flex items-center'>
              <Image src="/linkedin-icon.svg" layout="fixed" width="35" height="35" />
            </div>
            <div>
              <h3 className='font-semibold text-xs text-brown'>LinkedIn</h3>
              <h3 className='font-medium text-xs'>linkedin.com/in/ommi-putera-6734a7209 </h3>
            </div>
          </div>
        </div>

      </CenterContent>
      <div className="absolute right-0 mt-2">
        <Marquee speed={40} gradient={false}>
          <h1 className="text-9xl text-dark-gray-500 font-light">Ommi Putera Karunia - Frontend Engineer - </h1>
        </Marquee>
      </div>
    </React.Fragment>
  )
}
