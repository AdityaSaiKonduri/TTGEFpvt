'use client'
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [toggle, settoggle] = useState(false);

  const dropdown = () => {
    setOpen(!open);
    console.log(open);
  }

  const dropdown1 = () => {
    setOpen1(!open1);
    console.log(open1);
  }

  const Toggle = () => {
    settoggle(!toggle);
    console.log(toggle);
  }

  return (
    <>
      <div className="sm:items-center sm:flex sm:flex-row sm:justify-evenly gap-96 sm:w-full hidden h-20 shadow-lg">
        <div className="flex ml-10 text-xl">Logo</div>
        <div className="flex gap-2">
          <div className="sm:mr-10 sm:cursor-pointer sm:text-xl">Home</div>

          <div className="sm:relative sm:mr-10 sm:cursor-pointer sm:text-xl flex items-center">
            Our Solution
            <button onClick={dropdown}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1">
                <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
              </svg>
            </button>

            {open && (
              <div className="sm:absolute sm:mt-36 sm:left-0 sm:w-56 bg-white border rounded-2xl shadow-lg transition-all duration-1000 ease-in-out">
                <div className="p-2">
                  <div className="sm:py-1 sm:px-4 hover:bg-gray-100 cursor-pointer">Why energyflow?</div>
                  <div className="sm:py-1 sm:px-4 hover:bg-gray-100 cursor-pointer">Applications</div>
                </div>
              </div>
            )}
          </div>

          <div className="sm:mr-10 sm:cursor-pointer sm:text-xl">Technology</div>
          <div className="sm:mr-10 sm:cursor-pointer sm:text-xl">Our Team</div>
          <div className="sm:mr-10 sm:cursor-pointer sm:text-xl">Investors</div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex items-center justify-between h-10 items-center bg-transparent">
          <div className="ml-10">
            Logo
          </div>
          <div className="relative mr-10">
            <div className="relative" onClick={Toggle}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="6" width="16" height="2" fill="currentColor" />
                <rect x="4" y="11" width="16" height="2" fill="currentColor" />
                <rect x="4" y="16" width="16" height="2" fill="currentColor" />
              </svg>
            </div>
            {toggle && (
              <div className="absolute mt-30 right-1 w-64 flex justify-start transition-all duration-1000 ease-in-out">
                <div className="p-2 bg-white border rounded-xl shadow-lg w-full">
                  <div className="cursor-pointer hover:bg-gray-100">
                    Home
                  </div>
                  <div className="mt-1 cursor-pointer hover:bg-gray-100 w-full">
                    Our Solution
                    <button onClick={dropdown1}>
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 pt-1">
                        <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  {open1 && (
                    <div>
                      <div className="mt-1 pl-10 cursor-pointer bg-transparent hover:bg-gray-100">
                        Why energyflow?
                      </div>
                      <div className="mt-1 pl-10 cursor-pointer hover:bg-gray-100 w-full">
                        Applications
                      </div>
                    </div>

                  )}

                  <div className="mt-1 cursor-pointer hover:bg-gray-100">
                    Technology
                  </div>
                  <div className="mt-1 cursor-pointer hover:bg-gray-100 w-full">
                    Our Team
                  </div>
                  <div className="mt-1 cursor-pointer hover:bg-gray-100 w-full">
                    Investors
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
