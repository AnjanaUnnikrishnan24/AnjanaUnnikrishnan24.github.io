import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'
import About from './components/About'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     <NavBar />
     <HeroSection />
     <About />
     <Skills />
     <Education />
     <Projects />
     <ContactMe />
     <Footer />
    </>
  )
} 

export default App