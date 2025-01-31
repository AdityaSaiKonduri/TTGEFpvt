'use client';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({ sections }) => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const handleScroll = (sectionRef, sectionName) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/${sectionName}`);
      setOpen(false);
      setMobileOpen(false);
    }
  };

  return (
    <nav className="bg-[#04A763] shadow-lg sticky top-0 z-50 text-l font-semibold p-2 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Logo" className="h-[80px] w-[80px]" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleScroll(sections.landingPage, '')}
              className="text-black hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Home
            </button>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(true)}
                className="text-black hover:text-white px-3 py-2 rounded-md font-medium flex items-center transition-colors duration-200"
              >
                Our Solution
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                </svg>
              </button>

              {open && (
                <div
                  onMouseLeave={() => setOpen(false)}
                  className="absolute right-0 mt-2 w-48 bg-[#04A763] rounded-md shadow-lg py-1 transform origin-top-right transition-transform duration-200"
                >
                  <button
                    onClick={() => handleScroll(sections.solution, 'solution')}
                    className="block w-full text-left px-4 py-2 text-sm text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
                  >
                    Why energyflow?
                  </button>
                  <button
                    onClick={() => handleScroll(sections.application, 'application')}
                    className="block w-full text-left px-4 py-2 text-sm text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
                  >
                    Applications
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleScroll(sections.technology, 'technology')}
              className="text-black hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Technology
            </button>

            <button
              onClick={() => handleScroll(sections.team, 'ourteam')}
              className="text-black hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Our Team
            </button>

            <button
              onClick={() => handleScroll(sections.investors, 'investors')}
              className="text-black hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Investors
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="6" width="16" height="2" fill="currentColor" />
                <rect x="4" y="11" width="16" height="2" fill="currentColor" />
                <rect x="4" y="16" width="16" height="2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <button
          onClick={() => handleScroll(sections.landingPage, '')}
          className="block w-full text-left px-3 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
        >
          Home
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="block w-full text-left px-3 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
        >
          Our Solution
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ml-1 inline-block transform transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          >
            <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
          </svg>
        </button>
        
        <div
          className={`transition-all duration-300 ease-in-out ${
            open ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <button
            onClick={() => handleScroll(sections.solution, 'solution')}
            className="block w-full text-left px-6 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
          >
            Why energyflow?
          </button>
          <button
            onClick={() => handleScroll(sections.application, 'application')}
            className="block w-full text-left px-6 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
          >
            Applications
          </button>
        </div>

        <button
          onClick={() => handleScroll(sections.technology, 'technology')}
          className="block w-full text-left px-3 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
        >
          Technology
        </button>
        <button
          onClick={() => handleScroll(sections.team, 'ourteam')}
          className="block w-full text-left px-3 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
        >
          Our Team
        </button>
        <button
          onClick={() => handleScroll(sections.investors, 'investors')}
          className="block w-full text-left px-3 py-2 text-black hover:text-white hover:bg-[#038b52] transition-colors duration-200"
        >
          Investors
        </button>
      </div>
    </nav>
  );
};

export default Navbar;