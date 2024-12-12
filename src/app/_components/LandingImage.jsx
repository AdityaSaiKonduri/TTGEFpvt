"use client";
import { Acme } from 'next/font/google';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react';
import ScrollDown from './ScrollDown';

const acme = Acme({
    weight: '400',
    subsets: ['latin'],
});

const LandingImage = () => {
    return (
        <main className='w-full h-screen landing_bg-image flex flex-col justify-start items-center'>
            <div className='w-3/4 lg:mt-20 flex justify-center lg:flex-row lg:justify-evenly items-center flex-col gap-10 md:gap-20 lg:gap-48 xl:gap-96'>
                <img src="/logo.png" alt="Logo" className='lg:w-1/6 md:w-1/4 w-1/3' />
                <span className={`leading-relaxed text-lg md:text-xl lg:text-4xl text-start w-full text-black ${acme.className} font-semibold`}>Helping Industries to create a carbon free future by providing clean energy through affordable energy storage solutions</span>
            </div>
            <ScrollDown />
        </main>
    )
}

export default LandingImage