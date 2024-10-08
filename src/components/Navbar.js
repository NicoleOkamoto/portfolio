import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {

  return (
    <header className="bg-gray-800 md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <ThemeToggle />
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nicole Okamoto
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-white">
            Skills
          </a>
          <a href="#education" className="mr-5 text-white">
            Education
          </a>
          <a href="#certifications" className="mr-5 text-white">
            Certifications
          </a>
        </nav>

        <a
          href="mailto:nicoleokamoto@icloud.com"
          className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header >
  );
}