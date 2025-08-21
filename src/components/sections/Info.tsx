"use client"
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import senpai from "@/public/images/senpai/senpai.webp"
import Image from "next/image";
import SpeechBubble from "@/src/components/ui/speech-bubble";
import { motion, useInView } from "motion/react"
import React, { useRef } from 'react'


const Info = (): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)


    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 pt-12 pb-24 place-items-center overflow-hidden">
            <div className="space-y-6 px-2 md:px-0">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
                    className="text-2xl text-content-secondary md:text-3xl lg:text-5xl font-semibold text-center md:text-left">Mais diversão e praticidade no seu WhatsApp</motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ type: "tween", duration: 2.0, ease: "easeInOut" }}

                    className="text-lg md:text-xl text-justify shrink-0 hyphens-auto break-words md:text-left ">A Senpai está sempre pronta para deixar suas conversas mais interativas! Transforme imagens em stickers, adicione textos estilosos e personalize suas figurinhas de forma rápida, fácil e gratuita.</motion.p>

                <Button
                    asChild
                    className=" text-content-inverse bg-content-secondary hover:bg-content-primary/59 transition-all
                    duration-500 flex items-center gap-2 p-5 lg:p-6 text-base md:text-lg  w-full md:w-fit rounded-full"
                >
                    <Link
                        href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link que leva para o número do bot."

                    >
                        <BsWhatsapp className="text-xl" />
                        <motion.p
                            ref={ref}
                            initial={{ x: "-100%" }}
                            animate={{ x: isInView ? 0 : "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 100, }}
                        >Fale com a Senpai</motion.p>
                    </Link>
                </Button>

            </div>


            <div className=" w-full flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
                <div className="relative mt-20 lg:mt-0 w-64 h-64 md:w-72 md:h-72 lg:h-[450px] lg:w-[450px] rounded-full bg-red-50 flex justify-center items-center max-w-[90vw]">
                    <Image
                        priority
                        src={senpai}
                        alt="Imagem da Senpai"
                        fill
                        className="object-cover w-full h-auto relative rounded-full"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 450px"
                        quality={80}
                    />
                    <SpeechBubble side="right" style="-top-10 -left-10 sm:top-0 sm:-left-32 lg:top-8 lg:-left-24 w-40 sm:w-52 text-xs sm:text-sm lg:text-lg lg:w-60">
                        Ei! Quer saber mais sobre mim? 💙
                    </SpeechBubble>


                </div>
            </div>
        </section >
    )
}

export default Info