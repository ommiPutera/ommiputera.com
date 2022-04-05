import Head from "next/head";
import React from 'react'
import Experiences from './experiences';
import Footer from './footer';
import Introduction from './introduction';
import SkillsAndProjects from './skillsAndProjects';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Ommi P. Karunia</title>
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