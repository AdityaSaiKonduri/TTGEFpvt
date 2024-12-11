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
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="w-full md:w-3/4 text-left mb-12 p-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <img src="/bg_about.png"  alt="BG" className='md:w-4/5'/>
      </div>
    </main>
  )
}

export default LandingPage