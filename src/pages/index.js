import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";

// styles
const pageStyles = {}


// markup
const IndexPage = () => {
  return (
    <main className="relative" style={pageStyles}>
      <Seo title="Aérea Studio" />
      <Navbar />
      <Hero />
      <About />
      <div style={{ background: 'whiteSmoke' }}>
        <Team />
      </div>
      <Projects />
      <Contact />
      <Social />
    </main>
  )
}

export default IndexPage;
