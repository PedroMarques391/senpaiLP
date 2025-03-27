import { CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { benefits } from "@/data/utils"

const CarouselBenefit = () => {
  return (
    <section className="w-full max-w-6xl mx-auto my-10">
      <h1 className="text-center text-4xl md:text-left md:text-5xl font-semibold text-black md:pb-6">Quais são os Beneficios?</h1>
      <Carousel className="w-full max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto select-none">
        <CarouselContent className="-ml-1 md:-ml-5 flex gap-2">
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