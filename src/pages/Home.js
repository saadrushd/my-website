import React from 'react'
import Landing from './home-sections/Landing'
import WhoAmI from './home-sections/WhoAmI'
import Projects from './home-sections/Projects'
import Contact from './home-sections/Contact'
import Services from './home-sections/Services'

function Home() {
  return (
    <div>
      <Landing />
      <WhoAmI />
      <Projects />
      <Services />
      <Contact />
    </div>
  )
}

export default Home
