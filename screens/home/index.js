import Head from "next/head";
import React from 'react'
import NavigationGuide from "../../components/navigationGuide";
import useGetScrollView from "../../hooks/useGetScrollView";
import Experiences from './experiences';
import Footer from './footer';
import Introduction from './introduction';
import SkillsAndProjects from './skillsAndProjects';
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const [scrollY] = useGetScrollView();

  const getTitleHead = () => {
    if (scrollY < 600) return "Introduction"
    if (scrollY >= 600 && scrollY <= 1300) return "Experiences"
    if (scrollY >= 1300 && scrollY <= 2000) return "Skills And Projects"
    if (scrollY > 2000) return "Footer"
    return ""
  }

  React.useEffect(() => {
    router.push("/")
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>{`Ommi Putera - ${getTitleHead()}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='hidden lg:block'>
        <NavigationGuide
          idExperience="experiences"
          idSkillsAndProject="skills-and-project"
          idFooter="footer"
        />
      </div>
      <Introduction />
      <div id="experiences">
        <Experiences />
      </div>
      <div id="skills-and-project">
        <SkillsAndProjects />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Home;