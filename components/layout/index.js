import React from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Footer from './footer'
import Header from './header'
import { BurgerMenu, SideMenu } from './shared'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  const [openSideNav, setOpenSideNav] = React.useState(false)
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useEffect(() => {

    if (router.pathname) {
      setOpenSideNav(false)
    }

  }, [router.pathname])

  return (
    <div className="container mx-auto">
      {/* <BurgerMenu open={openSideNav} onClick={() => setOpenSideNav(!openSideNav)}>
        <SideMenu open={openSideNav} blockScroll={blockScroll} allowScroll={allowScroll} />
      </BurgerMenu> */}
      <Header />
      <div className={`my-6 mx-6 sm:mx-10 md:mx-16 lg:mx-28 ${openSideNav ? "mt-[100vh]" : "mt-0"} animate__from__top__to__bottom`}>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}