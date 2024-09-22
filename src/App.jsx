import React from 'react';
import { Helmet } from 'react-helmet';
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import { Woks } from "./components/Woks"

function App() {
  return (
    <div>
      <Helmet>
        <title>Mubasshir | Frontend & Web Developer </title>
        <meta name="description" content="Mubasshir's portfolio showcasing expertise in frontend and web development. Explore projects, skills, and contact information of a professional web developer." />
      </Helmet>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Woks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App