"use client";
import { BsWhatsapp } from "react-icons/bs";
import { achievements } from "@/src/data";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Counter from "../sections/Counter";
import Link from "next/link";
import { Header } from "./Header";
import { CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = (): React.JSX.Element => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const refCard = useRef(null);
    const isCardInView = useInView(refCard);

    const t = useTranslations("hero");

    return (
        <section>
            <div
                className="relative text-content-inverse bg-gradient-to-r from-fuchsia-300 via-purple-300 to-slate-50 bg-center   md:px-20 rounded-b-[60px] overflow-hidden z-20">
                <Image
                    src="/images/senpai/hero.webp"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <Header />
                <div className="absolute inset-0 bg-black/50 rounded-b-[60px]"></div>
                <section
                    id="home"
                    className="container relative grid grid-cols-1 lg:grid-cols-2  mx-auto  overflow-hidden">
                    <div className="flex flex-col gap-6 px-5 md:px-0 xl:px-5 pt-32 overflow-hidden w-full justify-center  items-center lg:gap-9">
                        <motion.h1
                            ref={ref}
                            initial={{ x: "100%" }}
                            animate={{ x: isInView ? 0 : "100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.8 }}
                            className="text-4xl md:text-5xl md:w-[80%] font-bold leading-tight text-center lg:text-left"
                        >
                            {t("title")}
                        </motion.h1>

                        <div className="flex flex-col gap-10 md:gap-5 w-full md:w-[80%] mb-3 ">
                            <Link
                                href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="flex items-center justify-center gap-3  mx-auto lg:mx-0  rounded-full bg-[#25D366] p-4 font-bold text-white  transition duration-300  hover:bg-[#1DA851] "
                                >
                                    <BsWhatsapp
                                        aria-label="Ícone do WhatsApp"
                                        className="w-6 h-6 flex-shrink-0"
                                    />
                                    {t("cta")}
                                </button>
                            </Link>
                            <div className="text-content-inverse font-bold flex text-sm sm:text-xs md:text-sm gap-1 flex-wrap mx-auto lg:mx-0 text-center">
                                {t.rich("disclaimer", {
                                    terms: (chunks) => <Link href="/termo-de-uso" target="_blank" className="text-[#25D366] hover:underline">{chunks}</Link>,
                                    privacy: (chunks) => <Link href="/privacidade" target="_blank" className="text-[#25D366] hover:underline">{chunks}</Link>
                                })}

                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-re">
                        <div className="relative mx-auto border-gray-800 border-[10px] rounded-[2.5rem] -mb-30 mt-10 lg:mt-30 z-10">
                            <div className="absolute h-[32px] w-[3px] bg-gray-800 -left-[12px] top-[72px] rounded-l-lg"></div>
                            <div className="absolute h-[46px] w-[3px] bg-gray-800 -left-[12px] top-[124px] rounded-l-lg"></div>
                            <div className="absolute h-[46px] w-[3px] bg-gray-800 -left-[12px] top-[178px] rounded-l-lg"></div>
                            <div className="absolute h-[64px] w-[3px] bg-gray-800 -right-[12px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden bg-surface-card-alt">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    height={650}
                                    width={350}
                                    playsInline
                                    className="z-0"
                                >
                                    <source src="/videos/senpaiTalk.mp4" type="video/mp4" />
                                    {t("videoSupport")}
                                </video>
                            </div>

                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                        </div>
                    </div>

                </section>
            </div >
            <div className=" bg-surface-card px-6 md:px-10 lg:px-20 rounded-b-[60px] -mt-16" >
                <section
                    ref={refCard}
                    className="grid grid-cols-1 md:grid-cols-3  md:w-full max-w-7xl  mx-auto place-items-center content-center text-center pt-24 pb-14 gap-5 md:gap-4 overflow-hidden" >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            ref={refCard}
                            initial={{ y: "-100%" }}
                            animate={{ y: isCardInView ? 0 : "100%" }}
                            transition={{ type: "twee", stiffness: 100, damping: 25, duration: achievement.duration }}
                            className="w-full h-full text-center bg-card text-card-foreground flex flex-col gap-6 rounded-xl  py-6 overflow-hidden"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl lg:text-3xl font-bold tracking-tight ">
                                    <motion.h1
                                        ref={refCard}
                                        initial={{ y: "-100%" }}
                                        animate={{ y: isCardInView ? 0 : "100%" }}
                                        transition={{ type: "twee", stiffness: 100, damping: 25, duration: achievement.duration - 0.5 }}
                                        className="flex items-center justify-center gap-x-2 p-2">
                                        <Counter number={achievement.title as number} type={t(`type.${achievement.type}`)} />
                                    </motion.h1>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <motion.p
                                    ref={refCard}
                                    initial={{ y: "-100%" }}
                                    animate={{ y: isCardInView ? 0 : "100%" }}
                                    transition={{ type: "twee", stiffness: 100, damping: 25, duration: achievement.duration + 0.5 }}
                                    className="text-xl md:text-base lg:text-lg font-medium opacity-70">
                                    {t(`achievements.${achievement.descriptionKey}`)}
                                </motion.p>
                            </CardContent>
                        </motion.div>

                    ))}

                </section>

            </div>
        </section >

    );
};

export default Hero;