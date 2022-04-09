import React from 'react'

export default function Footer() {
  return (
    <section className="block space-y-4 md:flex items-center flex-grow justify-between top-0 z-10 sticky sm:relative border-b sm:border-none bg-white sm:bg-light-gray md:relative text-black font-semibold text-base xl:mt-6 mb-3 mt-0 px-6 sm:px-0 py-6 md:py-3 sm:mt-2 sm:mx-10 md:mx-16 lg:mx-28">
      <div className="w-full">
        <h4>All rights reserved © Ommi P. Karunia 2022</h4>
      </div>
      <ul className="w-full lg:w-1/4 xl:w-1/3 flex flex-grow items-center justify-center space-x-4 md:justify-between">
        <a href="https://www.instagram.com/omiputera/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2.5 text-black">
          <li>Instagram</li>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2.5 text-black">
          <li>Dribble</li>
        </a>
        <a href="https://www.linkedin.com/in/ommi-putera-6734a7209/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2.5 text-black">
          <li>LinkedIn</li>
        </a>
      </ul>
    </section>
  )
}