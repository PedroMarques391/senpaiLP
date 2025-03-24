"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { BsWhatsapp } from "react-icons/bs"
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "motion/react"

interface IFunctionsCardProps {
    imagePath: string
    title: string
    subtitle: string
    message: string
    duration: number
}

const FunctionsCard = ({ imagePath, title, subtitle, message, duration }: IFunctionsCardProps): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: "some" })

    return (
        <div
            id="func"
            className="bg-gray-100 w-full p-6 flex flex-col gap-6 rounded-xl justify-start overflow-hidden">
            <motion.div
                ref={ref}
                initial={{ x: "110%" }}
                animate={{ x: isInView ? 0 : "110%" }}
                transition={{
                    type: "tween",
                    duration: duration,
                    ease: "easeInOut"
                }}
                className="mx-auto  w-full text-center  rounded-lg">


                <Image
                    src={imagePath}
                    alt={title}
                    width={400}
                    height={400}
                    priority
                    className="inline-block w-full object-contain h-full rounded-xl"
                />
            </motion.div>
            <motion.h1
                ref={ref}
                initial={{ x: "-100%" }}
                animate={{ x: isInView ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 60, damping: 25, duration: 2.0 }}
                className="text-xl lg:text-2xl tracking-wider font-semibold">{title}</motion.h1>
            <motion.p
                ref={ref}
                initial={{ x: "-100%" }}
                animate={{ x: isInView ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 50, damping: 25, duration: 2.0 }}
                className="text-xl text-gray-400">{subtitle}</motion.p>
            <Link
                href={`https://wa.me/555497153068?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que leva para o número do bot."
            >
                <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all flex items-center gap-2"
                >
                    <BsWhatsapp className="text-xl" />
                    Fale com a Senpai
                </Button>
            </Link>
        </div>
    )
}

export default FunctionsCard