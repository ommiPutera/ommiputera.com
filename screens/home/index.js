import Head from "next/head";
import React from 'react'
import useGetScrollView from "../../hooks/useGetScrollView";
import Experiences from './experiences';
import Footer from './footer';
import Introduction from './introduction';
import SkillsAndProjects from './skillsAndProjects';

function Home() {
  const [scrollY] = useGetScrollView();

  const getTitleHead = () => {
    if (scrollY < 600) return "Introduction"
    if (scrollY >= 600 && scrollY <= 1300) return "Experiences"
    if (scrollY >= 1300 && scrollY <= 2000) return "Skills And Projects"
    if (scrollY > 2000) return "Footer"
    return ""
  }

  return (
    <React.Fragment>
      <Head>
        <title>{`Ommi Putera - ${getTitleHead()}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Introduction />
      <Experiences />
      <SkillsAndProjects />
      <Footer />
    </React.Fragment>
  )
}

export default Home;