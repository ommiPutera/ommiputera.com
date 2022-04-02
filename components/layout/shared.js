import React from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export function Indicator({ active, position }) {
  return (
    <>
      {position === "vertical"
        ?
        <div className={`w-[5.1px] h-[21px] rounded-full ${active ? "bg-brown" : "bg-transparent"}`}></div>
        :
        <div className={`w-[21px] h-[5.1px] rounded-full ${active ? "bg-black" : "bg-transparent"}`}></div>
      }
    </>
  )
}

export function BurgerMenu({ open, onClick, children }) {
  return (
    <React.Fragment>
      <button className="fixed z-10 right-4 md:right-12 top-0 md:top-16 md:bg-dark-gray rounded-full p-3" onClick={onClick}>
        {open ?
          <XIcon className="h-8 w-8 text-blue-500 animate__pop" />
          :
          <MenuIcon className="h-8 w-8 text-blue-500 animate__pop" />
        }
      </button>
      {children}
    </React.Fragment>
  )
}

export function SideMenu({ open, blockScroll, allowScroll }) {
  if (open) blockScroll()
  if (!open) allowScroll()
  return (
    <>
      <div className={`fixed w-full flex z-0 right-0 animate__from__top__to__bottom`}>

        <div className={`bg-dark-gray w-screen right-0 !duration-700 delay-150 text-black ${open ? "block h-screen" : "h-0 invisible"}`}>
          <ul className="flex flex-col items-end space-y-6 px-10 pt-48">
            <Link href="/">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">Home</li>
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">Contact</li>
              </a>
            </Link>
            <Link href="/work">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">Work</li>
              </a>
            </Link>
            <Link href="/about">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">About</li>
              </a>
            </Link>
          </ul>
        </div>


        <div className={`bg-black w-[700px] right-0 !duration-700 delay-150 text-white ${open ? "block h-screen" : "h-0 invisible"}`}>
          <ul className="flex flex-col items-end space-y-6 px-10 pt-48">
            <Link href="/">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">Home</li>
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">Contact</li>
              </a>
            </Link>
            <Link href="/work">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">Work</li>
              </a>
            </Link>
            <Link href="/about">
              <a className="flex items-center space-x-8">
                <li className="text-4xl hover:opacity-70">About</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}
