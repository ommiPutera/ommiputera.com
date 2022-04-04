import Image from "next/image";
import CenterContent from "../components/centerContent";
import React from "react"
import Marquee from "react-fast-marquee";
import Button from "../components/button";
import SocialMedia from "../components/socialMedia";
import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Ommi P. Karunia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CenterContent className="block mt-8 mb-2 md:flex md:items-center md:justify-center md:divide-x-2">
        <div className='md:col-span-1 flex items-center lg:ml-10 xl:ml-28 md:w-[320px] md:h-[320px]'>
          <Image src="/profile-home.svg" layout="fixed" width="380" height="380" />
        </div>
        <div className='md:col-span-1 mt-12 md:mt-0 md:pl-10 flex flex-col items-start justify-center'>
          <h1 className='text-[25px] leading-[30px] font-medium animate__text'>I am a <span className='text-brown font-semibold'>Front-end</span> Engineer <br /> & Design Enthusiast.</h1>
          <h1 className='text-[25px] leading-[30px] font-medium text-black/40 animate__text mt-2.5'>Helping brands to stand out.</h1>
          <p className='text-sm mt-7 leading-6 animate__text'>After I graduated from college, I decided to further develop myself into the digital world which I think is more promising for my future career. Previously, I had expertise in graphic design such as Adobe Illustrator.</p>
          <span className="mt-12 animate__component">
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
        <Marquee speed={35} gradient={false}>
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
    </React.Fragment >
  )
}
