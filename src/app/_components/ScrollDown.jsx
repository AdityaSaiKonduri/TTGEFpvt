"use client";

import React, { useState, useEffect } from 'react';

const ScrollDown = () => {
    const [isVisible, setVisibility] = useState(true);

    const toggleVisibility = () => {
        if (window.scrollY < window.innerHeight) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };

    const scrollThrough = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`w-[50px] h-[50px] rounded-[25px] shadow- bg-black bg-opacity-35 bottom-[40px] left-1/2 fixed z-50 
      transform -translate-x-1/2 flex items-center justify-center cursor-pointer 
      ${isVisible ? 'block' : 'hidden'}`}
            onClick={scrollThrough}
        >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9551 27.7949C16.8096 28.6494 18.1973 28.6494 19.0518 27.7949L32.1768 14.6699C33.0313 13.8154 33.0313 12.4277 32.1768 11.5732C31.3223 10.7188 29.9346 10.7188 29.0801 11.5732L17.5 23.1533L5.91992 11.5801C5.06543 10.7256 3.67773 10.7256 2.82324 11.5801C1.96875 12.4346 1.96875 13.8223 2.82324 14.6768L15.9482 27.8018L15.9551 27.7949Z" fill="black" />
            </svg>
        </div>
    );
};

export default ScrollDown;
