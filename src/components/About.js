import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


export default function About() {
  const { theme } = useContext(ThemeContext);
  const lightModeVideo = "./videos/world.mp4";
  const darkModeVideo = "./videos/world.dark.mp4";

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-#172554">
            Hi, I'm Nicole. </h1>
          <h3 className="title-font sm:text-xl text-l mb-1 font-medium text-#172554">
            <br className="hidden lg:inline-block" />Passionate Full Stack Developer | Problem Solver | Digital Innovator
          </h3>
          <p className="mb-8 leading-relaxed">
            Dedicated and enthusiastic Full Stack Developer with a strong foundation in web development and digital marketing. I bring a unique blend of creativity and technical expertise, honed through my diverse background in business management and e-commerce. With a commitment to continuous learning and a knack for problem-solving, I'm excited to contribute to innovative projects and deliver exceptional user experiences. Let's build something amazing together!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {theme === 'light' ? (
            <video
              src={lightModeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={darkModeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* <video src={world}
            type="video/gif"
            autoPlay
            loop
            muted
            playsInline */}

        </div>
      </div>
    </section >
  );
}