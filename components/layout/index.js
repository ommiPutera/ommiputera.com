import React from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Footer from './footer'
import Header from './header'
import { BurgerMenu, SideMenu } from './shared'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  const [openSideNav, setOpenSideNav] = React.useState(false)
  const [indicatorActive, setIndicatorActive] = React.useState('')
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useEffect(() => {
    if (router.pathname) {
      setOpenSideNav(false)
      setIndicatorActive(router.pathname)
    }
  }, [router.pathname])

  return (
    <React.Fragment>
      <BurgerMenu open={openSideNav} onClick={() => setOpenSideNav(!openSideNav)}>
        <SideMenu
          open={openSideNav}
          activePage={indicatorActive}
          blockScroll={blockScroll}
          allowScroll={allowScroll}
        />
      </BurgerMenu>
      <div className="container mx-auto">
        <Header />
        <div className="my-6 mx-4 md:mx-16 lg:mx-28">
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}