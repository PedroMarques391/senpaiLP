"use client";

import senpaiAbout from "@/public/images/about/about1.webp";
import senpaiAbout2 from "@/public/images/about/about2.webp";
import senpaiAbout3 from "@/public/images/about/about3.webp";
import wallpaper from "@/public/images/about/wallpaper.webp";
import Layout from "@/src/components/layout/Layout";
import AlternatingSection from "@/src/components/sections/AlternatingSection";

import Team from "@/src/components/sections/Team";
import { team } from "@/src/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const AboutPage = () => {
  const t = useTranslations("about");
  return (
    <Layout backgroundColor="bg-gray-100" backgroundHeader="bg-none" container={false}>
      <main className="w-full min-h-screen">
        <section className="w-full h-[700px] relative">
          <Image
            src={wallpaper}
            alt="Wallpaper"
            fill
            placeholder="blur"
            className="w-full object-cover "
          />

          <button
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
            className="absolute bottom-10 left-[50%] transform -translate-x-[50%] text-content-inverse text-3xl font-bold  px-6 py-3 rounded-lg animate-bounce cursor-pointer"
          >
            <MdKeyboardDoubleArrowDown size={60} />
          </button>
        </section>
        <section>
          <AlternatingSection imageGridAlign="left" image={senpaiAbout} title={t("title1")}>
            {t("paragraph1")}
          </AlternatingSection>
          <AlternatingSection imageGridAlign="right" image={senpaiAbout2} title={t("title2")}>
            {t("paragraph2")}
          </AlternatingSection>
          <AlternatingSection imageGridAlign="left" image={senpaiAbout3} title={t("title3")}>
            {t("paragraph3")}
          </AlternatingSection>
        </section>
        <section>
          <div className=" text-center py-10 bg-gray-200">
            <h1 className="text-3xl font-bold mb-6">{t("meetOurTeam")}</h1>
            <p className="text-lg text-gray-600 mb-6">{t("aDedicatedTeam")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto md:px-5 overflow-hidden justify-stretch">
              {team.map((teamMember, index) => {
                const isLastItem = index === team.length - 1;

                const spanClass = isLastItem ? "md:col-span-2" : "";

                return (
                  <Team
                    key={index}
                    style={spanClass}
                    image={teamMember.image}
                    name={teamMember.name}
                    jobTitle={t(`${teamMember.jobTitle}`)}
                    bio={t(`${teamMember.bio}`)}
                    links={teamMember.links}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
