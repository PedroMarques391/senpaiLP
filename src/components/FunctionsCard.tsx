"use client"
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

const FunctionsCard = ({ imagePath, title, subtitle, duration }: IFunctionsCardProps): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: "some" })

    return (
        <div
            id="func"
            className="bg-white shadow-lg w-full flex flex-col gap-4 rounded-2xl justify-start overflow-hidden transform transition-transform hover:scale-105">
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
                    className="inline-block w-full object-contain h-full rounded-ss-xl"
                />
            </motion.div>
            <div className="p-4 h-52 space-y-4">
                <motion.h1
                    ref={ref}
                    initial={{ x: "-100%" }}
                    animate={{ x: isInView ? 0 : "-100%" }}
                    transition={{ type: "spring", stiffness: 60, damping: 25, duration: 2.0 }}
                    className="text-2xl lg:text-2xl font-bold tracking-tight text-black">
                    {title}
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ x: "-100%" }}
                    animate={{ x: isInView ? 0 : "-100%" }}
                    transition={{ type: "spring", stiffness: 50, damping: 25, duration: 2.0 }}
                    className="text-lg text-gray-400 grow">{
                        subtitle}
                </motion.p>
            </div>

        </div>
    )
}

export default FunctionsCard