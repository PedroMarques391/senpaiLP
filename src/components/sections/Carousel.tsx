"use client"

import { CardContent, CardTitle } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import { benefits } from "@/src/data/utils"
import { useEffect, useState } from "react"

const CarouselBenefit = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const totalSliders: number = benefits.length


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSliders)
    }, 3000)
    return () => clearInterval(interval)
  }, [totalSliders])

  return (
    <section className="w-full max-w-6xl mx-auto my-10">
      <Carousel
        opts={{
          loop: true,
          startIndex: currentIndex

        }}


        className="w-full max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto select-none">
        <CarouselContent className="-ml-1 md:-ml-5 flex gap-2 transition-all duration-500 ease-in-out transform">
          {benefits.map((benefit, index) => (
            <CarouselItem key={index} className="pl-1 md:pl-0 lg:pl-6 md:basis-1/2 lg:basis-1/3">
              <div className="p-3">
                <div className="rounded-2xl shadow-xl border border-gray-200 bg-white">
                  <CardTitle className="text-lg font-bold text-gray-900 p-4 text-center">
                    {benefit.title}
                  </CardTitle>
                  <div className="flex justify-center items-center p-4">
                    {benefit.icon}
                  </div>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <p className="text-md text-gray-700 text-center leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-900 text-white transition-all " />
        <CarouselNext className="bg-gray-900 text-white  transition-all " />
      </Carousel>
    </section>
  )
}

export default CarouselBenefit