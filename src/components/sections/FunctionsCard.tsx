"use client"
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "motion/react"

interface IFunctionsCardProps {
    imagePath: string
    title: string
    subtitle: string
    message: string
}

const FunctionsCard = ({ imagePath, title, subtitle }: IFunctionsCardProps): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: "some" })

    return (
        <div
            id="func"
            className="bg-white shadow-lg w-full flex flex-col  rounded-2xl justify-start overflow-hidden">
            <motion.div
                ref={ref}
                initial={{ x: "110%" }}
                animate={{ x: isInView ? 0 : "110%" }}
                transition={{
                    type: "tween",
                    duration: 1.5,
                    ease: "easeInOut"
                }}
                className="mx-auto  w-full text-center  rounded-lg">


                <Image
                    src={imagePath}
                    alt={title}
                    width={400}
                    height={400}
                    priority
                    className="inline-block w-[400px] h-[400px] object-contain rounded-ss-xl bg-[#0a0a0a]"
                />
            </motion.div>
            <div className="p-4 h-auto md:h-52 lg:h-60 xl:h-52 space-y-4 ">
                <motion.h1
                    ref={ref}
                    initial={{ x: "-100%" }}
                    animate={{ x: isInView ? 0 : "-100%" }}
                    transition={{ type: "spring", stiffness: 60, damping: 25, duration: 2.0 }}
                    className="text-base md:text-xl xl:text-2xl font-bold tracking-tight text-black h-5 md:h-10  flex items-center">
                    {title}
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ x: "-100%" }}
                    animate={{ x: isInView ? 0 : "-100%" }}
                    transition={{ type: "spring", stiffness: 50, damping: 25, duration: 2.0 }}
                    className="text-lg text-gray-600 h-full ">
                    {subtitle}
                </motion.p>
            </div>

        </div>
    )
}

export default FunctionsCard