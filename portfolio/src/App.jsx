import React from "react";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
