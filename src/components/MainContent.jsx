import React from 'react'

import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'
import AcademyContainer from './AcademyContainer'
import ExperienceContainer from './ExperienceContainer'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
      <ExperienceContainer/>
      <AcademyContainer />
    </main>
  )
}

export default MainContent
