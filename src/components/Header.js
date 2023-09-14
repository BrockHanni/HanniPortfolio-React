import React, { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the dropdown after clicking a menu item (optional)
    setIsDropdownOpen(false);
  };

  return (
    <div className="">
      <link href="/distoutput.css" rel="stylesheet" />
      <div className="text-center">
        <div className="">
          <br></br>
          <br></br>
          <h1 className="text-4xl font-bold text-lightGreen">Brock Hanni</h1>
        </div>

        <div className="relative flex md:flex md:flex-grow flex-row justify-end space-x-1 mr-10">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="bg-green text-lightGreen hover:bg-green hover:text-grey font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            Menu
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-8 right-0 bg-brown mt-5"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={() => scrollToSection('About')}
                    className="text-xl font-bold hover:text-lightGreen"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('Skills')}
                    className="text-xl font-bold hover:text-lightGreen"
                  >
                    My Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('Projects')}
                    className="text-xl font-bold hover:text-lightGreen"
                  >
                    Past Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('Resume')}
                    className="text-xl font-bold hover:text-lightGreen"
                  >
                    Resume
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('Contact')}
                    className="text-xl font-bold hover:text-lightGreen"
                  >
                    Contact Me
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-center space-x-1">
          <img
            src={require('./images/ProfilePic.jpg')}
            alt="Brock Hanni"
            className="rounded-3xl w-2/5 h-1/4 box-content border-green border-2 shadow-green shadow-md"
          ></img>
        </div>
        <br></br>
        <br></br>
        <div>
          <h1 className="text-4xl font-bold text-brown mt-20">
            Your next Front-End Web Developer
          </h1>
          <br></br>
        </div>
      </div>
    </div>
  );
}