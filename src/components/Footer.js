import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-1">
          <a
            href="https://www.linkedin.com/in/nicoleokamoto/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-blue-500 hover:text-blue-400"
          >
            <img
              alt="linkedin logo"
              className="w-full h-full object-cover object-center rounded"
              src="./logos/linkedin.png"
              style={{ width: "auto", height: "40px" }}
            />
          </a>
          <a
            href="https://github.com/nicoleokamoto"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-300 hover:text-gray-200"
          >
            <img
              alt="linkedin logo"
              className="w-full h-full object-cover object-center rounded"
              src="./logos/github_white.png"
              style={{ width: "auto", height: "40px" }}
            />
          </a>
          <a
            href="mailto:nicoleokamoto@icloud.com"
            className="mx-4 text-gray-300 hover:text-gray-200"
          >
            <img
              alt="linkedin logo"
              className="w-full h-full object-cover object-center rounded"
              src="./logos/email.png"
              style={{ width: "auto", height: "40px" }}
            />
          </a>
        </div>
        <p className="text-center text-gray-400 mt-4">
          &copy;{new Date().getFullYear()} NicoleOkamoto
        </p>
      </div>
    </footer>
  );
}
