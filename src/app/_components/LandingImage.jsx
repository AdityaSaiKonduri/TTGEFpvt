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
        <main className='w-full h-screen landing_bg-image'>
            <div className='mt-20 flex lg:flex-row lg:justify-evenly justify-center items-center flex-col gap-10 md:gap-20 lg:gap-48 xl:gap-96 m-2'>
                <Image width={150} height={60} src={"/next.svg"} alt="Next"></Image>
                <span className={`xs:text-[34px] sm:text-[38px] md:text-[40px] lg:text-[50px] text-stone-600 ${acme.className} font-semibold`}>Empowering Green Energy,<br /> One Flow At A Time</span>
            </div>
            <ScrollDown />
        </main>
    )
}

export default LandingImage