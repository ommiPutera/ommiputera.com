import React from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export function Indicator({ active, position, className }) {
  return (
    <React.Fragment>
      {position === "vertical"
        ?
        <div className={`w-[10px] h-[10px] rounded-full ${className} ${active ? "bg-brown" : "bg-transparent"}`}></div>
        :
        <div className={`absolute bottom-0 w-[14px] h-[4.5px] rounded-full ${className} ${active ? "bg-black" : "bg-transparent"}`}></div>
      }
    </React.Fragment>
  )
}

export function BurgerMenu({ scrollY, open, onClick, children }) {
  return (
    <React.Fragment>
      <button className={`fixed z-40 right-4 md:right-24 top-4 sm:top-10 md:top-16 bg-brown rounded-full p-2 md:p-3 ${scrollY > 30 ? "visible animate__burger" : "visible md:invisible"}`} onClick={onClick}>
        {open ?
          <XIcon className="h-6 w-6 md:h-8 md:w-8 text-white animate__pop" />
          :
          <MenuIcon className="h-6 w-6 md:h-8 md:w-8 text-white animate__pop" />
        }
      </button>
      {children}
    </React.Fragment>
  )
}

export function SideMenu({ open, setOpen, activePage, blockScroll, allowScroll }) {
  if (open) blockScroll()
  if (!open) allowScroll()
  return (
    <div className={`w-full top-0 flex justify-end`}>
      <div onClick={() => setOpen(!open)} className={`fixed z-20 bg-gradient-to-r from-light-gray to-black opacity-10 h-screen duration-500 ease-in-out ${open ? "block w-full" : "invisible"}`}>
      </div>
      <div className={`fixed overflow-hidden z-20 bg-black h-screen duration-500 ease-in-out text-white ${open ? "block w-full md:w-1/4" : "w-0 invisible"}`}>
        <div className="flex flex-col items-end space-y-12 pr-8 lg:pr-14 pt-28 lg:pt-44">
          <h1 className="px-11 text-light-gray-500 text-sm">Navigation</h1>
          <ul className="flex flex-col items-end space-y-7 lg:space-y-5">
            <Link href="/">
              <a className="flex items-center space-x-8" onClick={() => setOpen(false)}>
                <li className={`text-4xl hover:opacity-70 ${activePage === "/" && "animate__pop"}`}>Home</li>
                <Indicator active={activePage === "/"} position="vertical" />
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center space-x-8" onClick={() => setOpen(false)}>
                <li className={`text-4xl hover:opacity-70 ${activePage === "/contact" && "animate__pop"}`}>Contact</li>
                <Indicator active={activePage === "/contact"} position="vertical" />
              </a>
            </Link>
            <Link href="/work">
              <a className="flex items-center space-x-8" onClick={() => setOpen(false)}>
                <li className={`text-4xl hover:opacity-70 ${activePage === "/work" && "animate__pop"}`}>Work</li>
                <Indicator active={activePage === "/work"} position="vertical" />
              </a>
            </Link>
            <Link href="/about">
              <a className="flex items-center space-x-8" onClick={() => setOpen(false)}>
                <li className={`text-4xl hover:opacity-70 ${activePage === "/about" && "animate__pop"}`}>About</li>
                <Indicator active={activePage === "/about"} position="vertical" />
              </a>
            </Link>
          </ul>
          <div className="px-11 divide-y-[1.5px] divide-light-gray/20">
            <h1 className="text-right pb-2 text-light-gray-500 text-sm">Social media</h1>
            <ul className="flex pt-2 space-x-4">
              <Link href="/">
                <a>
                  <li className={`text-[15px] hover:opacity-70 ${activePage === "/" && "animate__pop"}`}>Instagram</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li className={`text-[15px] hover:opacity-70 ${activePage === "/contact" && "animate__pop"}`}>Dribble</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
