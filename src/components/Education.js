import React from "react";
import { educationTimeline } from "../data";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Education() {
  return (

    <section id="education" className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10">
            Education
          </h1>
          <div className="max-w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl mx-auto relative border-l-4 border-white px-4 md:px-8 text-left">
            {educationTimeline.map((item, index) => (
              <div key={index} className="mb-8 pl-8 relative">
                <div className="absolute -left-7 sm:-left-8 md:-left-11 lg:-left-11 top-4 sm:top-5 md:top-6 lg:top-8 w-5 h-5 bg-gray-400 rounded-full border-2 border-white"></div>
                <div className="bg-gray-800 p-6 rounded-md shadow-lg">
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="text-gray-200">{item.institution}</p>
                  <p className="font-semibold text-gray-300">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};