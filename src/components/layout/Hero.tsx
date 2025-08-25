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
                            Sua Nova Amiga Virtual para Figurinhas no WhatsApp
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
                                    Começar no WhatsApp
                                </button>
                            </Link>

                            <p className="text-content-inverse font-bold flex text-sm sm:text-xs md:text-sm gap-1 sm:gap-0 flex-wrap   mx-auto lg:mx-0 text-center b">
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

                    <div className="flex justify-center items-center">
                        <div className="relative rounded-[40px] border-[10px] border-black overflow-hidden bg-surface-card-alt -mb-30 mt-10 lg:mt-30">
                            <video
                                autoPlay
                                loop
                                muted
                                height={650}
                                width={350}
                                playsInline
                            >
                                <source src="/videos/senpaiTalk.mp4" type="video/mp4" />
                                Seu navegador não suporta vídeo.
                            </video>
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