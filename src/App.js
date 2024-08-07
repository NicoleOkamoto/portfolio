import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import { ThemeProvider } from "./components/ThemeContext";
import './index.css';



export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
