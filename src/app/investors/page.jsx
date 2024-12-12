import React from 'react';
import Image from 'next/image';
import Navbar from '../_components/navbar';

const Investors = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-10">
          <p className="text-center mt-10 text-2xl md:text-5xl">Why invest on us?</p>
          <Image
            src="/why_invest_on_us.svg"
            alt="why_invest_on_us"
            width={100}
            height={100}
            className="mt-10 z-10 p-5"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
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
        </div>

        <p className="text-center mt-10 text-2xl md:text-5xl">Our Investors</p>

        {/* Investor Section 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/our_investors1.png"
              alt="Grid Stabilization"
              width={100}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
        </div>

        {/* Investor Section 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-1">
            <Image
              src="/our_investors2.png"
              alt="Grid Stabilization"
              width={100}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 order-2">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Investor Section 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/our_investors3.png"
              alt="Grid Stabilization"
              width={100}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
        </div>

        <p className="text-center mt-10 text-2xl md:text-5xl">Our Goals</p>

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
        </div>

        <p className="text-center mt-10 text-2xl md:text-5xl pb-10">Long term plans</p>

        <div className="flex justify-center items-center h-96 w-full pb-10">
          <div className=' h-96 w-9/12'>
            <img src="/application.png" alt="Application" srcset="" className="w-full h-full" />
          </div>
        </div>

        <p className="text-center mt-10 text-2xl md:text-5xl pb-7">Tharam Thiram</p>

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
        </div>
      </div>
    </main>
  );
};

export default Investors;