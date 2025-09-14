"use client";

import Layout from "@/src/components/layout/Layout";
import CarouselBenefit from "@/src/components/sections/Carousel";
import { Faq } from "@/src/components/sections/Faq";
import FunctionsCard from "@/src/components/sections/FunctionsCard";
import Info from "@/src/components/sections/Info";
import Services from "@/src/components/sections/Services";
import Title from "@/src/components/ui/title";
import { functionsCardItens, services } from "@/src/data";
import { scrollSmooth } from "@/src/utils";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations();
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "instant" });

    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        scrollSmooth(hash);
      }
    }, 300);
  }, []);

  return (
    <Layout hero>
      <div className="ksksk" id="func">
        <Title>{t("home.question")}</Title>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-[80%] sm:w-[60%] md:w-full mx-auto">
        {functionsCardItens.map((functionsCardItem, item) => (
          <FunctionsCard
            key={item}
            imagePath={t(`${functionsCardItem.imagePath}`)}
            title={t(`${functionsCardItem.title}`)}
            subtitle={t(`${functionsCardItem.subtitle}`)}
          />
        ))}
      </section>
      <Info />
      <section id="plans">
        <Title>{t("home.plans")}</Title>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 place-items-center gap-7 mx-auto">
          {services.map((service, index) => (
            <Services
              key={index}
              service={t(`${service.service}`)}
              value={service.value}
              description={t(`${service.description}`)}
              characteristics={t.raw(`${service.characteristics}`)}
              textButton={t(`${service.textButton}`)}
              bestOption={service?.bestOption}
              paymentLink={service.paymentLink}
            />
          ))}
        </div>
      </section>
      <Title>{t("home.benefits")}</Title>
      <CarouselBenefit />
      <section className="container">
        <Title center>F.A.Q</Title>
        <Faq />
      </section>
    </Layout>
  );
}
