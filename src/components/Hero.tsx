"use client"
import { Header } from "./template/header/Header"
import { Button } from "./ui/button"
import { BsWhatsapp } from "react-icons/bs"
import { CardContent, CardHeader, CardTitle } from "./ui/card"
import { achievements } from "@/data/utils"
import Image from "next/image"
import whatsDemo from "../../public/images/whats.png"
import { motion, useInView } from "motion/react";
import { useRef } from "react"



const Hero = (): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref);
    const refCard = useRef(null)
    const isCardInView = useInView(refCard)
    return (
        <section>
            <div
                className="relative bg-[url(../../public/images/1.png)] bg-cover bg-no-repeat text-white bg-center pb-20 px-6 md:px-20 rounded-b-[60px]">
                <Header />
                <div className="absolute inset-0 bg-black/50 rounded-b-[60px]"></div>
                <section
                    id="home"
                    className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mx-auto py-10 pt-32 overflow-hidden">
                    <div className="flex flex-col gap-6 z-10 px-5 md:px-0 xl:px-5 py-16  lg:col-span-2 overflow-hidden">
                        <motion.h1
                            ref={ref}
                            initial={{ x: "-100%" }}
                            animate={{ x: isInView ? 0 : "-100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.8 }}
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                            Sua Assistente Virtual para Criar Figurinhas no WhatsApp
                        </motion.h1>
                        <motion.h2
                            ref={ref}
                            initial={{ x: "-100%" }}
                            animate={{ x: isInView ? 0 : "-100%" }}
                            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 2 }}
                            className="text-lg md:text-base lg:text-xl">

                            A <span className="font-semibold">Senpai</span> é sua assistente virtual 24h pronta para deixar suas conversas mais divertidas! Com ela, você pode criar figurinhas personalizadas, transformar imagens em stickers, adicionar textos estilizados e muito mais. Tudo isso de forma rápida, fácil e gratuita. Sua bot de figurinhas no WhatsApp! 🎨✨
                        </motion.h2>
                        <Button className="bg-white text-teal-600 font-bold p-6 rounded-full shadow-md hover:bg-gray-100 transition w-fit">
                            <BsWhatsapp size={20} />  Use Grátis no WhatsApp
                        </Button>
                    </div>
                    <motion.div
                        ref={ref}
                        initial={{ x: "100%" }}
                        animate={{ x: isInView ? 0 : "100%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.8 }}
                        className="w-full h-full flex justify-center items-center z-10 lg:col-span-1">
                        <Image
                            src={whatsDemo}
                            priority
                            alt="Mockup WhatsApp"
                            className="w-auto h-auto max-w-full max-h-full object-contain"
                        />
                    </motion.div>



                </section>
            </div>
            <div className=" bg-black/10  px-6 md:px-20 rounded-b-[60px] -mt-16">
                <section className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto place-items-center content-center text-center pt-24 pb-14 gap-5 md:gap-2 overflow-hidden">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            ref={refCard}
                            initial={{ y: "-100%" }}
                            animate={{ y: isCardInView ? 0 : "100%" }}
                            transition={{ type: "twee", stiffness: 100, damping: 25, duration: achievement.duration }}
                            className="w-full shadow-lg h-full text-center bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl lg:text-3xl font-bold tracking-tight drop-shadow-md">
                                    <motion.h1
                                        ref={refCard}
                                        initial={{ y: "-100%" }}
                                        animate={{ y: isCardInView ? 0 : "100%" }}
                                        transition={{ type: "twee", stiffness: 100, damping: 25, duration: achievement.duration - 0.5 }}> {achievement.title}</motion.h1>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <motion.p
                                    ref={refCard}
                                    initial={{ y: "-100%" }}
                                    animate={{ y: isCardInView ? 0 : "100%" }}
                                    transition={{ type: "twee", stiffness: 100, damping: 25, duration: achievement.duration + 0.5 }}
                                    className="text-xl sm:text-base md:text-lg lg:text-lg font-medium opacity-70">
                                    {achievement.description}
                                </motion.p>
                            </CardContent>
                        </motion.div>

                    ))}

                </section>

            </div>
        </section>

    )
}

export default Hero