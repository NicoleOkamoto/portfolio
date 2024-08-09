import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
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
        <Education />
        <Certifications />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
