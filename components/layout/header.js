import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Indicator } from '../shared'

export default function Header() {
  const router = useRouter()
  const [indicatorActive, setIndicatorActive] = React.useState('')

  React.useEffect(() => {
    if (router.pathname) {
      setIndicatorActive(router.pathname)
    }
  }, [router.pathname])

  return (
    <nav className="flex items-center flex-grow justify-between top-0 z-10 sticky sm:relative border-b sm:border-none bg-white sm:bg-light-gray md:relative text-black font-semibold text-base xl:mt-6 mb-3 mt-0 px-6 sm:px-0 py-6 md:py-3 sm:mt-2 sm:mx-10 md:mx-16">
      <div className="w-1/3 hidden xl:block">
        <div className="flex space-x-3">
          <Image src="/indonesia-flag.svg" loading='eager' width="16" height="16" />
          <h3 className="leading-4 text-black">Jakarta, Indonesia</h3>
        </div>
      </div>
      <div className='w-full flex justify-start xl:justify-center'>
        <Link href="/">
          <a className="w-fit block md:flex flex-col items-center space-y-2.5 text-black">
            <span className="text-xl xl:text-[18px] font-semibold tracking-tight text-black">Ommi Putera</span>
            <Indicator className="hidden md:block" active={indicatorActive === '/'} />
          </a>
        </Link>
      </div>
      <ul className="w-3/4 lg:w-1/2 xl:w-1/3 hidden md:flex flex-grow items-center justify-between">
        <Link href="/contact">
          <a className={`flex flex-col items-center space-y-2.5 ${indicatorActive === '/contact' ? "text-black" : "text-black/70"}`}>
            <li>Contact</li>
            <Indicator active={indicatorActive === '/contact'} />
          </a>
        </Link>
        <Link href="/work">
          <a className={`flex flex-col items-center space-y-2.5 ${indicatorActive === '/work' ? "text-black" : "text-black/70"}`}>
            <li>Work</li>
            <Indicator active={indicatorActive === '/work'} />
          </a>
        </Link>
        <Link href="/about">
          <a className={`flex flex-col items-center space-y-2.5 ${indicatorActive === '/about' ? "text-black" : "text-black/70"}`}>
            <li>About</li>
            <Indicator active={false} />
          </a>
        </Link>
      </ul>
    </nav>
  )
}