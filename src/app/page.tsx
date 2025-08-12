'use client'

import FunctionsCard from "@/src/components/sections/FunctionsCard";
import Info from "@/src/components/sections/Info";
import Layout from "@/src/components/layout/Layout";
import Services from "@/src/components/sections/Services";
import { faq, functionsCardItens, services } from "@/src/data"
import CarouselBenefit from "@/src/components/sections/Carousel";
import { Faq } from "@/src/components/sections/Faq";
import Title from "@/src/components/ui/title";
import { useEffect } from "react";
import { scrollSmooth } from "@/src/utils";



export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, behavior: "instant" });

      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          scrollSmooth(hash);
        }
      }, 300);
    }
  }, []);


  return (
    <Layout hero>
      <div className="w-full  overflow-hidden " id="func">
        <Title >
          O que a senpai pode fazer por você hoje?</Title>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-[80%] md:w-full mx-auto">
        {functionsCardItens.map((functionsCardItem, item) => (
          <FunctionsCard
            key={item}
            imagePath={functionsCardItem.imagePath}
            title={functionsCardItem.title}
            subtitle={functionsCardItem.subtitle}
            message={functionsCardItem.message}
          />
        ))}
      </section>
      <Info />
      <section id="plans">
        <Title >Conheça nossos planos</Title>
        <div
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 place-items-center gap-5 mx-auto">
          {services.map((service, index) => (
            <Services
              key={index}
              service={service.service}
              url={service.url}
              value={service.value}
              description={service.description}
              characteristics={service.characteristics}
              textButton={service.textButton}
              message={service.message}
            />
          ))}
        </div>
      </section>
      <Title>Quais são os Beneficios?</Title>
      <CarouselBenefit />
      <section className="container">
        <Title center>F.A.Q</Title>
        <Faq faq={faq} />
      </section>

    </Layout>
  );
}
