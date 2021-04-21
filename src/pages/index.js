import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Navbar from "../components/Navbar";

// styles
const pageStyles = {}


// markup
const IndexPage = () => {
  return (
    <main className="relative" style={pageStyles}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Social />
    </main>
  )
}

export default IndexPage;
