import Link from 'next/link'
import React from 'react'
import { Indicator } from '../shared'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const [indicatorActive, setIndicatorActive] = React.useState('')

  React.useEffect(() => {
    if (router.pathname) {
      setIndicatorActive(router.pathname)
    }
  }, [router.pathname])

  return (
    <section className="flex items-center flex-grow justify-between top-0 z-30 sticky md:relative text-black font-semibold text-base md:py-6 sm:mx-10 md:mx-16 lg:mx-28">
      <div className="w-1/3 hidden md:block">
        <h3 className="leading-4">Located <br /> in Indonesia</h3>
      </div>
      <Link href="/">
        <a className="w-full hidden md:flex flex-col items-center hover:opacity-80 space-y-2.5">
          <span>Code by Ommi</span>
          <Indicator active={indicatorActive === '/'} />
        </a>
      </Link>
      <ul className="w-1/3 hidden md:flex flex-grow justify-between">
        <Link href="/contact">
          <a className="flex flex-col items-center hover:opacity-80 space-y-2.5">
            <li>Contact</li>
            <Indicator active={indicatorActive === '/contact'} />
          </a>
        </Link>
        <Link href="/work">
          <a className="flex flex-col items-center hover:opacity-80 space-y-2.5">
            <li>Work</li>
            <Indicator active={indicatorActive === '/work'} />
          </a>
        </Link>
        <Link href="/about">
          <a className="flex flex-col items-center hover:opacity-80 space-y-2.5">
            <li>About</li>
            <Indicator active={false} />
          </a>
        </Link>
      </ul>
    </section>
  )
}