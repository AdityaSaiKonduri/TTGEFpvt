'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (

    <nav className="bg-transparent shadow-lg sticky top-0 z-50 backdrop-blur-md text-xl font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold">Logo</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Home</Link>
            
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium flex items-center"
              >
                Our Solution
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1">
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
                </svg>
              </button>
              
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/solution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Why energyflow?</Link>
                  <Link href="/application" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Applications</Link>
                </div>
              )}
            </div>
            
            <Link href={"/technology"} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Technology</Link>
            <Link href="/ourteam" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Our Team</Link>
            <Link href="/investors" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Investors</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="6" width="16" height="2" fill="currentColor" />
                <rect x="4" y="11" width="16" height="2" fill="currentColor" />
                <rect x="4" y="16" width="16" height="2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden sticky bg-none">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-none">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Our Solution
              <button onClick={toggleDropdown}>
                <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 pt-1">
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                </svg>
              </button>
            </button>
            {open && (
              <div className="pl-6">
                <Link href="/solution" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Why energyflow?</Link>
                <Link href="/application" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Applications</Link>
              </div>
            )}
            <Link href={"/technology"} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Technology</Link>
            <Link href={"/ourteam"} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Our Team</Link>
            <Link href={"/investors"} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Investors</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;