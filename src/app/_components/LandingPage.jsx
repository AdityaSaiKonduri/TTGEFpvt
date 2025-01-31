import React from 'react'
import Navbar from './navbar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <div className='invisible'><Navbar /></div>
      <div className="flex flex-col justify-center items-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="w-full md:w-3/4 text-left mb-12 p-6 text-lg md:text-xl">
          Tharam-Thiran Green Energy Flow is committed to delivering affordable long-backup batteries for industries. Founded in 2020 in Tamil Nadu, India, our mission is to commercialize an affordable Sulfur-Iron-based flow battery that empowers industries to effectively utilize renewable energy. At Energy Flow, we are driven by our core value of fostering a positive team and family spirit, which inspires us to innovate continuously.
        </p>

        <img src="/bg_about.png" alt="BG" className='md:w-4/5' />
      </div>
    </main>
  )
}

export default LandingPage