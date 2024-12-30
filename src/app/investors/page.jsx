import React from 'react';
import Image from 'next/image';
import Navbar from '../_components/navbar';

const Investors = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
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

        <p className="text-center mt-10 text-2xl md:text-5xl">Grants</p>

        {/* Investor Section 1 */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16'>
          <img
            src="/our_investors1.png"
            alt="Investor 1"
            className="md:w-1/4 w-1/2 object-contain"
          />
          <img
            src="/our_investors2.png"
            alt="Investor 2"
            className="md:w-1/4 w-1/2 object-contain"
          />
          <img
            src="/our_investors3.png"
            alt="Investor 3"
            className="md:w-1/4 w-1/2 object-contain"
          />
        </div>
        
        <p className="text-center mt-10 text-2xl md:text-5xl">Awards and Recognitions</p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16'>
          <p></p>
          <p></p>
        </div>
        
        <p className="text-center mt-10 text-2xl md:text-5xl">Investors</p>
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