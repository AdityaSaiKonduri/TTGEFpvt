'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-[#04A763] shadow-lg top-0 z-50 text-l font-semibold p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href='/'
            >
              <div className="flex-shrink-0 flex items-center">
                {/* <span className="font-bold">Logo</span> */}
                <img src="/logo.png" alt="Logo"className='h-[80px] w-[80px]'/>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-white' : 'text-black'} hover:text-white px-3 py-2 rounded-md font-medium`}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`${isActive('/solution') || isActive('/application') ? 'text-white' : 'text-black'} hover:text-white px-3 py-2 rounded-md font-medium flex items-center`}
              >
                Our Solution
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1">
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
                </svg>
              </button>
              
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-[#04A763] rounded-md shadow-lg py-1">
                  <Link 
                    href="/solution" 
                    className={`block px-4 py-2 text-sm ${isActive('/solution') ? 'text-white' : 'text-black'} hover:text-white`}
                  >
                    Why energyflow?
                  </Link>
                  <Link 
                    href="/application" 
                    className={`block px-4 py-2 text-sm ${isActive('/application') ? 'text-white' : 'text-black'} hover:text-white`}
                  >
                    Applications
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/technology" 
              className={`${isActive('/technology') ? 'text-white' : 'text-black'} hover:text-white px-3 py-2 rounded-md font-medium`}
            >
              Technology
            </Link>
            
            <Link 
              href="/ourteam" 
              className={`${isActive('/ourteam') ? 'text-white' : 'text-black'} hover:text-white px-3 py-2 rounded-md font-medium`}
            >
              Our Team
            </Link>
            
            <Link 
              href="/investors" 
              className={`${isActive('/investors') ? 'text-white' : 'text-black'} hover:text-white px-3 py-2 rounded-md font-medium`}
            >
              Investors
            </Link>
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
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-white bg-[#04A763]' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
            >
              Home
            </Link>
            
            <div>
              <button
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${isActive('/solution') || isActive('/application') ? 'text-white' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
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
                  <Link 
                    href="/solution" 
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/solution') ? 'text-white bg-gray-50' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
                  >
                    Why energyflow?
                  </Link>
                  <Link 
                    href="/application" 
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/application') ? 'text-white bg-gray-50' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
                  >
                    Applications
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/technology" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/technology') ? 'text-white bg-[#04A763]' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
            >
              Technology
            </Link>
            
            <Link 
              href="/ourteam" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/ourteam') ? 'text-white bg-[#04A763]' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
            >
              Our Team
            </Link>
            
            <Link 
              href="/investors" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/investors') ? 'text-white bg-[#04A763]' : 'text-gray-700'} hover:text-gray-900 bg-[#04A763]`}
            >
              Investors
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;