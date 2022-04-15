import { useRouter } from 'next/router'
import React from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import { BurgerMenu, SideMenu } from '../shared'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  const router = useRouter()
  const [openSideNav, setOpenSideNav] = React.useState(false)
  const [indicatorActive, setIndicatorActive] = React.useState('')
  const [scrollY, setScrollY] = React.useState(0);
  const [blockScroll, allowScroll] = useScrollBlock();

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
      <BurgerMenu
        open={openSideNav}
        scrollY={scrollY}
        onClick={() => setOpenSideNav(!openSideNav)}
      >
        <SideMenu
          open={openSideNav}
          setOpen={setOpenSideNav}
          activePage={indicatorActive}
          blockScroll={blockScroll}
          allowScroll={allowScroll}
        />
      </BurgerMenu>
      <div className="bg-orange-100 text-center py-1 text-xs">
        Note: Sorry, this website is under development. 🚧🚧
      </div>
      <div className="container mx-auto z-30">
        <Header />
        <div className="sm:my-12 mx-5 md:mx-16 lg:mx-28">
          <main className="min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}