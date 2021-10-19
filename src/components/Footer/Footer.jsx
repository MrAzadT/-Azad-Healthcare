import React from "react";

const Footer = () => {
  return (
    <div className="mb-16">
      <footer className="text-gray-600 body-font bg-gray-700">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <img
                className="h-8 w-8 mr-4"
                src="https://res.cloudinary.com/abidazad/image/upload/v1634538240/healthcare_zlmjqo.png"
                alt="Workflow"
              />
              <span className="ml-3 text-xl text-white">Azad Healthcare</span>
            </a>
            <p className="mt-2 text-sm text-white">
              Our Vision – We strive to be a leader of healthcare innovation
              that delivers the highest quality care while providing exceptional
              patient experiences in a modern and inviting environment.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Departments
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Neurology
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Dental
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Nuclear Magnetic
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Surgical
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Emergency Care
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Our Service
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Find a Doctor
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    News
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Emergency Services
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Qualified Doctors
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Outdoors Checkup
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    24 Hours Services
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Have a Questions?
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    mrazadt@gmail.com
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    01757355100
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="/">
                    Dhaka, Bangladesh
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              Copyright ©2021 —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-400 ml-1"
                target="_blank"
              >
                All rights reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="/" className="text-gray-200">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-200">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-200">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/azad-tamal-92502a204/"
                className="ml-3 text-gray-200"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
