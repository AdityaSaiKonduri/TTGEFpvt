import React from "react";
import Navbar from "../_components/navbar";
import Image from "next/image";
import ScrollFadeIn from "../_components/scroll-animation";
const Application = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* <div className='invisible'><Navbar /></div> */}
      {/* <Navbar /> */}
      {/* <div className="w-full mb-6 md:mb-0">
        <img src="/application.png" alt="Application" srcset="" className="w-full h-[70vh]" />
      </div> */}
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4 md:gap-10">

        <div className="flex flex-col justify-center items-center text-center mb-8 gap-5">
          <h1 className="text-4xl lg:text-6xl text-center font-semibold mt-5">
            Application
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-4 my-10 w-10/12">
            Our solution is designed for applications requiring more than 20 hours of energy storage. We primarily focus on industries that utilize off-grid renewable energy or renewable sources connected to weak grids. Our solution supports renewable energy adoption by overcoming the challenges of daily and seasonal intermittency.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center p-2 mt-3 w-full max-w-7xl gap-10">
            <ScrollFadeIn direction='left'>
                <p className="p-4 text-start w-full max-w-2xl">
                    <span className='text-3xl font-semibold'>Remote Telecommunication Infrastructures</span><br /> <br />
                    <span className='text-xl'>We ensure uninterrupted power for critical communication infrastructure during outages, eliminating the need for diesel generators and contributing to your carbon credits. By providing stable and reliable renewable energy, we empower telecommunication companies to expand into remote areas and upgrade towers to the latest technologies.</span>
                </p>
            </ScrollFadeIn>
            <ScrollFadeIn direction='right'>
                <div className="flex justify-center p-3">
                    <Image src="/application_1.png" alt="Solution" width={500} height={500} className="max-w-full h-auto" />
                </div>
            </ScrollFadeIn>
        </div>

        <div className="flex flex-col md:flex-row items-center p-2 mt-3 w-full max-w-7xl gap-10">
            <ScrollFadeIn direction='left'>
                <div className="flex justify-center p-3">
                    <Image src="/application2.png" alt="Solution" width={500} height={500} className="max-w-full h-auto" />
                </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction='right'>
                <p className="p-4 text-start w-full max-w-2xl">
                    <span className='text-3xl font-semibold'>Remote Mining Operations</span><br /> <br />
                    <span className='text-xl'>We provide uninterrupted power for the critical mining equipment, significantly reducing fuel costs and carbon emissions by minimizing diesel generator usage. Our solution ensures reliable operation of essential safety systems, including ventilation, lighting, and emergency response equipment.</span>
                </p>
            </ScrollFadeIn>
        </div>


        {/* <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/application.png"
              alt="Grid Stabilization"
              width={100}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Application;
