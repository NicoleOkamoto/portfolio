import { BookmarkIcon } from "@heroicons/react/solid";
import React from "react";
import { badges } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-4">
          <BookmarkIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font ext-#172554 mb-4">
            Certifications
          </h1>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-3">
          {badges.map((badge) => (
            <div key={badge.name} className="p-3 sm:w-1/3 w-full">
              <div className="flex flex-col p-4 h-full items-center">
                <span className="title-font font-medium mb-4">{badge.name}</span>
                <div className="relative w-full h-full flex items-center justify-center">
                  <a href={badge.link} className="w-full h-full flex items-center justify-center">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center rounded"
                      src={badge.image}
                      style={{ width: "150px", height: "auto" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section >
  )
}
