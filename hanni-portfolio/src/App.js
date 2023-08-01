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
    <main className="">
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
