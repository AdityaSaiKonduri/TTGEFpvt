import React from 'react';
import Image from 'next/image';
import Navbar from '../_components/navbar';

const Investors = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      {/* <div className='invisible'><Navbar /></div> */}
      <h1 className="text-4xl lg:text-6xl font-semibold text-center p-4">Investors</h1>
      <div className="flex flex-col justify-center items-center min-h-screen gap-10">
        {/* <div className="flex flex-row items-center justify-center gap-10">
          <p className="text-center mt-10 text-2xl md:text-5xl">Why invest on us?</p>
          <Image
            src="/why_invest_on_us.svg"
            alt="why_invest_on_us"
            width={100}
            height={100}
            className="mt-10 z-10 p-5"
          />
        </div> */}

        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
          <Image
            src="/why_invest_on_us1.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
          <Image
            src="/why_invest_on_us1.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
          <Image
            src="/why_invest_on_us1.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
        </div> */}

        <p className="text-center mt-10 text-3xl md:text-5xl">Grants</p>

        {/* Investor Section 1 */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16'>
          <img
            src="/our_investors1.png"
            alt="Investor 1"
            className="md:w-1/4 w-1/3 object-contain"
          />
          <img
            src="/our_investors2.png"
            alt="Investor 2"
            className="md:w-1/4 w-1/3 object-contain"
          />
          <img
            src="/our_investors3.png"
            alt="Investor 3"
            className="md:w-1/4 w-1/3 object-contain"
          />
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-2 my-6'>
          <div className='w-full h-[1px] bg-gray-400'></div>
          <div className='w-full h-[1px] bg-gray-400'></div>
        </div>

        <p className="text-center mt-10 text-3xl md:text-5xl">Awards and Recognitions</p>
        <div className='w-4/5 flex flex-col md:flex-row items-center md:justify-between justify-center gap-16 md:gap-16'>
          <div className='flex flex-col items-center justify-start gap-10 text-center md:w-1/2 w-4/5'>
            <p className='text-2xl text-green-500 font-semibold'>One of the most impactful startups Prayas 2020 batch</p>
            <img src="/awards1.png" alt="Award 1" className="" />
          </div>
          <div className='flex flex-col items-center justify-start gap-10 text-center md:w-1/2 w-4/5'>
            <p className='text-2xl text-green-500 font-semibold'>One of the top 5 startups in Climate Pitch 2024 by Climate Collective</p>
            <img src="/awards2.png" alt="Award 1" className="" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-2 my-6'>
          <div className='w-full h-[1px] bg-gray-400'></div>
          <div className='w-full h-[1px] bg-gray-400'></div>
        </div>
        <p className="text-center mt-10 text-3xl md:text-5xl">Investors</p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16'>
          <img
            src="/our_investors4.png"
            alt="Investor 4"
            className="object-cover"
          />
          <img
            src="/our_investors5.png"
            alt="Investor 5"
            className="object-cover"
          />

        </div>

        {/* <p className="text-center mt-10 text-2xl md:text-5xl">Our Goals</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
          <Image
            src="/our_goals1.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
          <Image
            src="/our_goals2.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
          <Image
            src="/our_goals3.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
          <Image
            src="/our_goals4.png"
            alt="why_invest_on_us"
            width={200}
            height={200}
            className="z-10 p-5"
          />
        </div> */}

        {/* <p className="text-center mt-10 text-2xl md:text-5xl pb-10">Long term plans</p>

        <div className="flex justify-center items-center h-96 w-full pb-10">
          <div className=' h-96 w-9/12'>
            <img src="/application.png" alt="Application" srcset="" className="w-full h-full" />
          </div>
        </div> */}

        {/* <p className="text-center mt-10 text-2xl md:text-5xl pb-7">Tharam Thiram</p>

        <div className='flex flex-row justify-center items-center text-center h-64 w-full pb-10'>
          <div className='bg-green-600 h-32 w-8/12 rounded-full flex items-center justify-between px-10'>
            <p className="md:px-16 text-white md:text-lg text-base px-4  font-semibold">Let&apos;s start investing</p>
            <Image
              src="/lets_invest.png"
              alt="why_invest_on_us"
              width={100}
              height={100}
              className="z-10 p-5"
            />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Investors;