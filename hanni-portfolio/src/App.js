import React from "react";
import Resume from "./components/Resume";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (

    <main className="text-transparent bg-gradient-to-br from-green to-grey">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
      
    </main>
  );
}

// transparent: "#e7eee8",
// red: '490727',
// lightGreen: '#bacec3',
// teal:'#5e8d74',
// green:'074929',
// grey: '#838383',