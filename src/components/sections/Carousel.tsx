"use client";

import { CardContent, CardTitle } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { benefits } from "@/src/data";
import { useEffect, useState } from "react";
import { renderIcon } from "../shared/IconRenderer";

const CarouselBenefit = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSliders: number = benefits.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSliders);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSliders]);

  return (
    <section className="w-full max-w-6xl mx-auto my-10">
      <Carousel
        opts={{
          loop: true,
          startIndex: currentIndex

        }}

        className="w-full max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto select-none">
        <CarouselContent className="-ml-4 transition-all duration-500 ease-in-out transform ">
          {benefits.map((benefit, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 "
            >
              <div className="p-1">
                <div className="flex flex-col h-full rounded-2xl bg-surface-card overflow-hidden">
                  <CardTitle className="text-lg font-bold text-secondary-theme p-5 text-center">
                    {benefit.title}
                  </CardTitle>
                  <div className="flex justify-center items-center p-4">
                    {renderIcon(benefit.icon)}
                  </div>
                  <CardContent className="flex flex-col flex-grow justify-center p-6 pt-2">
                    <p className="text-md text-gray-700 text-center leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-secondary-theme text-content-inverse hover:bg-surface-card border-none transition-all " />
        <CarouselNext className="bg-secondary-theme text-content-inverse hover:bg-surface-card border-none  transition-all " />
      </Carousel>
    </section>
  );
};

export default CarouselBenefit;