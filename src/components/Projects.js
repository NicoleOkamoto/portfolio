import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4">
              <div className="relative flex items-center justify-center h-64 overflow-hidden bg-gray-900">
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 z-10 px-4 py-2 md:px-8 md:py-6 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <img
                    alt="github"
                    src={"./logos/github_white.png"}
                    style={{ width: "auto", height: "30px" }}
                  />
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-md md:text-large font-medium text-white mb-1 md:mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-tight md:leading-normal">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}