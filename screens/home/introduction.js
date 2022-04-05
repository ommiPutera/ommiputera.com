import React from 'react'
import Marquee from 'react-fast-marquee'
import Button from '../../components/button'
import Image from "next/image";
import CenterContent from '../../components/centerContent'
import NavigationGuide from '../../components/navigationGuide'
import SocialMedia from '../../components/socialMedia'

function Introduction() {
  return (
    <div className="min-h-screen">
      <div className='hidden lg:block'>
        <NavigationGuide />
      </div>
      <CenterContent className="block mt-8 mb-2 md:flex md:items-center md:justify-center md:divide-x-2">
        <div className='md:col-span-1 flex items-center 2xl:ml-32 xl:ml-52 lg:ml-20 md:ml-6 w-full h-full md:w-[250px] md:h-[250px] 2xl:w-[300px] 2xl:h-[300px] animate__pop__image'>
          <Image src="/profile-home.svg" loading='eager' layout="fixed" width="380" height="380" />
        </div>
        <div className='md:col-span-1 mt-12 md:mt-0 md:pl-10 flex flex-col items-start justify-center'>
          <h1 className='text-3xl lg:text-[25px] leading-[39px] lg:leading-[30px] font-medium animate__text'>I am a <span className='text-brown font-semibold'>Front-end</span> Engineer <br /> & Design Enthusiast.</h1>
          <h1 className='text-3xl lg:text-[25px] leading-[39px] lg:leading-[30px] font-medium text-black/50 animate__text mt-3.5'>Helping brands to stand out.</h1>
          <p className='text-base lg:text-sm mt-14 lg:mt-9 leading-6 animate__text'>After I graduated from college, I decided to further develop myself into the digital world which I think is more promising for my future career. Previously, I had expertise in graphic design such as Adobe Illustrator.</p>
          <span className="mt-10 md:mt-5 animate__component">
            <Button title="Project" />
            <SocialMedia
              iconSrc="/linkedin-icon.svg"
              title="LinkedIn"
              subTitle="linkedin.com/in/ommi-putera"
              href="https://www.linkedin.com/in/ommi-putera-6734a7209/"
            />
          </span>
        </div>
      </CenterContent>
      <div className="hidden md:block absolute right-0">
        <Marquee speed={15} gradient={false}>
          <h1 className="text-9xl text-black/80 font-light">Ommi Putera Karunia - Frontend Engineer - </h1>
        </Marquee>
      </div>
      <div className="md:mt-[160px]">
        <SocialMedia
          iconSrc="/gmail-icon.svg"
          title="Email"
          subTitle="omiputrakarunia@gmail.com"
          href="mailto:omiputrakarunia@gmail.com?subject=I%27m%20interested%20in%20you,%20can%20you%20help%20me?"
        />
      </div>
    </div>
  )
}

export default Introduction