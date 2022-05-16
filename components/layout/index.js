import { useRouter } from 'next/router'
import React from 'react'
import useDetecMobileDevice from '../../hooks/useDetecMobileDevice'
import useScrollBlock from '../../hooks/useScrollBlock'
import { BurgerMenu, SideMenu } from '../shared'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  const router = useRouter()
  const { device } = useDetecMobileDevice()

  const [openSideNav, setOpenSideNav] = React.useState(false)
  const [welcome, setWelcome] = React.useState(true)
  const [indicatorActive, setIndicatorActive] = React.useState('')
  const [scrollY, setScrollY] = React.useState(0);
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useEffect(() => {
    setTimeout(() => {
      setWelcome(false)
    }, 2650)
  }, [])

  React.useEffect(() => {
    if (router.pathname) {
      setOpenSideNav(false)
      setIndicatorActive(router.pathname)
    }
  }, [router.pathname])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`w-full fixed bg-black text-white z-50 flex justify-center items-center ${welcome ? "h-full visible" : "h-0 invisible transition-all duration-500 animate__welcome"}`}>
        <h1 className="text-lg md:text-xl lg:text-2xl animate__text_welcome"><span> </span></h1>
      </div>
      <div className={`${router.pathname === "/" && "bg-[url('/profile-home-ver.png')] w-full h-screen md:h-full bg-center bg-cover md:bg-none bg-no-repeat"} ${!welcome && "animate__welcome_home"} ${device === "Android" && "bg-fixed transition-all mb-2"}`}>
        <BurgerMenu
          open={openSideNav}
          scrollY={scrollY}
          onClick={() => setOpenSideNav(!openSideNav)}
        />
        <SideMenu
          open={openSideNav}
          setOpen={setOpenSideNav}
          activePage={indicatorActive}
          blockScroll={blockScroll}
          allowScroll={allowScroll}
        />
        <div className="container mx-auto z-30">
          <Header />
          <div className="sm:my-12 mx-5 md:mx-16 lg:mx-28">
            <main className="min-h-screen">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}