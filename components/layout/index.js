import React from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Footer from './footer'
import Header from './header'
import { BurgerMenu, SideMenu } from '../shared'
import { useRouter } from 'next/router'

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
      <BurgerMenu scrollY={scrollY} open={openSideNav} onClick={() => setOpenSideNav(!openSideNav)}>
        <SideMenu
          open={openSideNav}
          setOpen={setOpenSideNav}
          activePage={indicatorActive}
          blockScroll={blockScroll}
          allowScroll={allowScroll}
        />
      </BurgerMenu>
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