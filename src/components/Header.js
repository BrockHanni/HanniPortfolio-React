import React, { useState } from 'react';
import '../components/css/dropdown.css'


export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
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

        <div className="relative flex md:flex md:flex-grow flex-row justify-end space-x-1">
          <button id="dropdownDefaultButton" onClick={toggleDropdown} className="bg-green text-lightGreen hover:bg-green hover:text-grey font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center " type="button">Menu
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {isDropdownOpen && (
            <div
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-8 right-0 mt-2 bg-brown"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a href="#About" className="text-xl font-bold hover:text-lightGreen">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#Skills" className="text-xl font-bold hover:text-lightGreen">
                    My Skills
                  </a>
                </li>
                <li>
                  <a href="#Projects" className="text-xl font-bold hover:text-lightGreen">
                    Past Projects
                  </a>
                </li>
                <li>
                  <a href="#Resume" className="text-xl font-bold hover:text-lightGreen">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#Contact" className="text-xl font-bold hover:text-lightGreen">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-center space-x-1">
            <img src={require ("./images/ProfilePic.jpg")} alt="Brock Hanni" className="rounded-3xl w-2/5 h-1/4 box-content border-green border-2 shadow-green shadow-md"></img>
        </div>
        <br></br>
        <br></br>
        <div>
        <h1 className="text-4xl font-bold text-brown mt-20">Your next Front-End Web Developer</h1>
        <br></br>
            {/* <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"> </hr> */}
        </div>
      </div>
    </div>
  );
}