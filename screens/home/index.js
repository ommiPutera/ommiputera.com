import React from 'react'
import Experiences from './experiences';
import Footer from './footer';
import Introduction from './introduction';
import SkillsAndProjects from './skillsAndProjects';

function Index() {
  return (
    <React.Fragment>
      <Introduction />
      <Experiences />
      <SkillsAndProjects />
      <Footer />
    </React.Fragment>
  )
}

export default Index;