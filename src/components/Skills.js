import { ChipIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import { skills } from "../data";
import { ThemeContext } from "./ThemeContext";

export default function Skills() {

  const { theme } = useContext(ThemeContext);

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font ext-#172554 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I’m passionate about technology and always eager to learn something new. Whether it’s exploring new frameworks,
            improving my coding skills, or diving into different tools, I enjoy staying updated and pushing myself to grow.
            focus on delivering quality work and finding better ways to solve problems, using the skills and knowledge I’ve gained.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/5 w-full">
              <div className={`rounded flex flex-col items-center p-6 h-full shadow-2lg hover:shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <img
                  alt="logo"
                  className="w-full h-full object-cover object-center rounded mb-4"
                  src={skill.logo}
                  style={{ width: "auto", height: "80px" }}
                />
                <span
                  className={`title-font font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section >
  );
}