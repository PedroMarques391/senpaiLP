"use client"
import FunctionsCard from "@/components/FunctionsCard";
import Info from "@/components/Info";
import Layout from "@/components/template/Layout";
import senpai from "../../public/images/6.webp"
import Image from "next/image";
import Services from "@/components/Services";
import { faq, functionsCardItens, services } from "@/data/utils"
import CarouselBenefit from "@/components/Carousel";
import { Faq } from "@/components/Faq";



export default function Home() {

  return (
    <Layout hero>
      <div className="w-full p-4 overflow-hidden">
        <h1 className="py-10 text-2xl text-center lg:text-left md:text-3xl">
          O que a senpai pode fazer por você hoje?</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-[80%] md:w-full mx-auto">
        {functionsCardItens.map((functionsCardItem, item) => (
          <FunctionsCard
            key={item}
            imagePath={functionsCardItem.imagePath}
            title={functionsCardItem.title}
            subtitle={functionsCardItem.subtitle}
            message={functionsCardItem.message}
            duration={functionsCardItem.duration}
          />
        ))}
      </section>
      <Info />
      <section>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={senpai}
            alt="senpai image"
            priority
            width={150}
            height={150}
          />
          <h1 className="text-center text-4xl md:text-left md:text-5xl font-semibold text-black md:pb-6">Conheça nossos planos</h1>
        </div>
        <div
          id="plans"
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 place-items-center gap-5 mx-auto">
          {services.map((service, index) => (
            <Services
              key={index}
              service={service.service}
              value={service.value}
              description={service.description}
              characteristics={service.characteristics}
              textButton={service.textButton}
            />
          ))}
        </div>
      </section>
      <CarouselBenefit />
      <section className="container">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-black md:pb-6 pb-8">F.A.Q</h1>
        <Faq faq={faq} />
      </section>

    </Layout>
  );
}
