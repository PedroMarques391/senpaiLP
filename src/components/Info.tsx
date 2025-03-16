import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import senpai from "../../public/images/senpai.png"
import Image from "next/image";
import SpeechBubble from "@/components/ui/SpeechBubble";


import React from 'react'

const Info = (): React.JSX.Element => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 py-24 place-items-center">
            <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center md:text-left">Mais diversão e praticidade no seu WhatsApp</h1>
                <h2 className="text-lg md:text-xl lg:text-2xl text-center md:text-left">A Senpai está sempre pronta para deixar suas conversas mais interativas! Transforme imagens em stickers, adicione textos estilosos e personalize suas figurinhas de forma rápida, fácil e gratuita.</h2>

                <Button
                    asChild
                    className=" text-green-500 hover:bg-green-500 hover:text-white transition-all flex items-center gap-2 p-5 lg:p-6 text-xs md:text-lg lg:text-xl w-fit rounded-full bg-white border border-green-500"
                >
                    <Link
                        href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link que leva para o número do bot."

                    >
                        <BsWhatsapp className="text-xl" />
                        Fale com a Senpai
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
                    <SpeechBubble side="right" style="top-10 -left-20 sm:top-0 sm:-left-32 lg:top-8 lg:-left-24 w-40 sm:w-52 text-xs sm:text-sm lg:text-lg lg:w-60">
                        Ei! Quer saber mais sobre mim?
                    </SpeechBubble>

                    <SpeechBubble side="left" style="bottom-14 -right-20  -sm:right-20 lg:bottom-10 lg:right-0 w-40 sm:w-52 text-xs sm:text-sm lg:text-lg lg:w-60">
                        Tenho muitas surpresas para você! 🎉
                    </SpeechBubble>
                </div>
            </div>
        </section >
    )
}

export default Info