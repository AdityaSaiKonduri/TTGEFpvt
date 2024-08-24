import React from "react";
import Navbar from "../_components/navbar";
import Image from "next/image";

const Application = () => {
  return (
    <main className="flex flex-col min-h-screen bg_team_gradient">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/application.png"
              alt="Application"
              width={400}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          <h1 className="md:w-1/2 text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold">
            Application
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-5 md:mt-0">Grid Stabilization</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/application.png"
              alt="Grid Stabilization"
              width={400}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-1">
            <Image
              src="/application.png"
              alt="Grid Stabilization"
              width={400}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Grid Stabilization</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center p-5">
          <div className="md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-5 md:mt-0">Grid Stabilization</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/application.png"
              alt="Grid Stabilization"
              width={400}
              height={100}
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Application;