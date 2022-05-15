import Image from "next/image";
import React from 'react';
import Marquee from 'react-fast-marquee';
import Button from '../../components/button';
import CenterContent from '../../components/centerContent';
import SocialMedia from '../../components/socialMedia'

export default function Introduction() {
  return (
    <React.Fragment>
      <div className="min-h-screen">
        <CenterContent className="block mb-2 mt-8 md:grid-cols-12 md:items-center md:justify-items-end md:divide-x-2">
          <div className='md:col-span-6 flex items-center md:pr-10 w-0 h-0 md:w-[300px] md:h-[300px] 2xl:w-[340px] 2xl:h-[340px] animate__pop__image'>
            <Image src="/profile-home.svg" loading='eager' layout="fixed" width="380" height="380" />
          </div>
          <div className='md:col-span-6 mt-[420px] md:mt-0 md:pl-10 flex flex-col items-start justify-center'>
            <h1 className='text-[25px] lg:text-[27px] 2xl:text-[30px] leading-[30px] lg:leading-[34px] 2xl:leading-[36px] font-medium animate__text text-white md:text-black'>I am a <span className='text-brown font-semibold underline underline-offset-4'>Front-end</span> Engineer <br /> & <span className='text-brown font-semibold underline underline-offset-4'>Design</span> Enthusiast.</h1>
            <h1 className='text-[25px] lg:text-[27px] 2xl:text-[30px] leading-[30px] lg:leading-[34px] 2xl:leading-[36px] font-medium text-gray-300 md:text-black/60 animate__text'>Helping brands to stand out.</h1>
            <p className='text-base lg:text-sm mt-32 lg:mt-9 leading-6 animate__text text-black-400'>After I graduated from college, I decided to further develop myself into the digital world.</p>
            <span className="mt-12 md:mt-5 animate__component">
              <Button title="Project" className="px-20 py-6 text-base md:text-xs mb-16 md:mb-0" />
              <SocialMedia
                iconSrc="/linkedin-icon.svg"
                title="LinkedIn"
                subTitle="linkedin.com/in/ommi-putera"
                href="https://www.linkedin.com/in/ommi-putera-6734a7209/"
              />
            </span>
          </div>
        </CenterContent>
        <div className="block absolute right-0 top-[360px] md:top-auto">
          <Marquee speed={45} gradient={false}>
            <h1 className="text-[120px] font-normal md:text-9xl text-white md:text-black/30 md:font-light">Ommi Putera - Frontend Engineer - </h1>
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
    </React.Fragment>
  )
};