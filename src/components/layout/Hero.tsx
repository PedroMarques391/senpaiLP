"use client"
import { BsWhatsapp } from "react-icons/bs"
import { achievements } from "@/src/data"
import { motion, useInView } from "motion/react";
import { useRef } from "react"
import Counter from "../sections/Counter"
import Link from "next/link"
import { Header } from "./Header"
import { CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import Image from "next/image";



const Hero = (): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)


    const refCard = useRef(null);
    const isCardInView = useInView(refCard);

    return (
        <section>
            <div
                className="relative text-content-inverse bg-gradient-to-r from-fuchsia-300 via-purple-300 to-slate-50 bg-center pb-20  md:px-20 rounded-b-[60px] overflow-hidden">
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
                    className="container relative  gap-10 items-center mx-auto py-10 md:pt-32 overflow-hidden justify-center ">
                    <div className="flex flex-col gap-6 z-10 px-5 md:px-0 xl:px-5 pt-16 lg:col-span-2 overflow-hidden w-full h-[700px]  justify-center items-center">
                        <motion.h1
                            ref={ref}
                            initial={{ x: "100%" }}
                            animate={{ x: isInView ? 0 : "100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.8 }}
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ">
                            Sua Nova Amiga Virtual para Figurinhas no WhatsApp
                        </motion.h1>
                        <motion.h2
                            ref={ref}
                            initial={{ x: "-100%" }}
                            animate={{ x: isInView ? 0 : "-100%" }}
                            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 2 }}
                            className="text-lg md:text-base lg:text-xl font-bold">

                            A <span className="font-semibold">Senpai</span> está sempre disponível para deixar suas conversas mais divertidas e criativas! Com ela, você pode criar figurinhas personalizadas, transformar imagens, GIFs e vídeos em figurinhas animadas e muito mais. Tudo de forma rápida, fácil e gratuita. A sua bot de figurinhas para WhatsApp que torna cada conversa única!
                        </motion.h2>
                        <div className="flex flex-col md:flex-row gap-10">
                            <Link
                                href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                                target="_blank"
                                prefetch
                                rel="noopener noreferrer"
                            >
                                <button className="bg-[#25D366] text-content-inverse font-bold py-2 px-3 rounded-lg shadow-md transition flex items-center gap-4 w-full md:w-fit duration-300 sm:py-1 sm:px-2 sm:gap-2 md:py-2 md:px-3 md:gap-4 hover:bg-[#1DA851] hover:scale-105 hover:shadow-lg active:scale-95 justify-center">
                                    <BsWhatsapp aria-label="Icone do WhatsApp" className="flex-shrink-0 w-5 h-5 md:w7 md:h-7" />

                                    <div className="text-left">
                                        <p className="text-xs">Começar no</p>
                                        <p className="text-base font-semibolda lg:text-[17px]">WhatsApp</p>
                                    </div>
                                </button>

                            </Link>
                            <p className="text-content-inverse font-bold flex items-center justify-center md:justify-normal text-sm sm:text-xs md:text-sm gap-1 sm:gap-0 flex-wrap ">
                                Ao clicar no botão, você concorda com os&nbsp;
                                <Link href="/termo-de-uso" prefetch target="_blank" className="text-[#25D366] font-semibold hover:underline whitespace-nowrap">
                                    Termos de Uso
                                </Link> &nbsp;e&nbsp;
                                <Link href="/privacidade" target="_blank" prefetch className="text-[#25D366] font-semibold hover:underline whitespace-nowrap">
                                    Política de Privacidade.
                                </Link>
                            </p>
                        </div>
                    </div>

                </section>
            </div >
            <div className=" bg-surface-card px-6 md:px-10 lg:md:px-20 rounded-b-[60px] -mt-16" >
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
                                        <Counter number={achievement.title as number} type={achievement.type} />
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
                                    {achievement.description}
                                </motion.p>
                            </CardContent>
                        </motion.div>

                    ))}

                </section>

            </div>
        </section >

    )
}

export default Hero