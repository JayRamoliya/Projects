import React from 'react'
import Navbar from './components/Navbar'
import AboutPage from './components/AboutPage'
import SkillPage from './components/SkillPage'
import ProjectPage from './components/ProjectPage'



const App = () => {
  return (
    <>
      <Navbar/>
      <AboutPage/>
      <SkillPage/>
      <ProjectPage/>
    </>
  )
}

export default App