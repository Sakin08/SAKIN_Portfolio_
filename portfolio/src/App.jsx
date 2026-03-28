import React from "react";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-black text-white overflow-x-hidden">
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
      </div>
    </ErrorBoundary>
  );
}

export default App;
