"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react';
import ScrollDown from './ScrollDown';

const LandingImage = () => {
    return (
        <main className='w-full h-screen landing_bg-image'>
            <Image width={150} height={60} src={"/next.svg"}></Image>
            Empowering Green Energy One Flow At A Time
            <ScrollDown />
        </main>
    )
}

export default LandingImage