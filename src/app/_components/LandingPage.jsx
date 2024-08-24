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
    <main className="min-h-screen bg_custom_gradient">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 text-center mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="w-full max-w-5xl"> {/* Increased max-width */}
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-2 border-gray-300">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{(index != 6) ? index + 1 : "Thala"}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </main>
  )
}

export default LandingPage