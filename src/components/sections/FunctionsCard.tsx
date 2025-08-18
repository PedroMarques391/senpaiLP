"use client"
import Image from "next/image"
import { useRef } from "react"
import { motion } from "motion/react"

interface IFunctionsCardProps {
    imagePath: string
    title: string
    subtitle: string
    message: string
}

const FunctionsCard = ({ imagePath, title, subtitle }: IFunctionsCardProps): React.JSX.Element => {
    const ref = useRef(null)

    return (
        <div
            className="bg-[#FF9DBB] shadow-lg w-full flex flex-col  rounded-2xl justify-start overflow-hidden">
            <motion.div
                ref={ref}
                initial={{ x: "110%" }}
                animate={{ x: "0%" }}
                transition={{
                    type: "tween",
                    duration: 3.0,
                    ease: "easeInOut"
                }}
                className="mx-auto  w-full text-center  rounded-lg">

                <div className="relative w-[400px] h-[400px]">
                    <Image
                        src={imagePath}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-contain rounded-ss-xl bg-[#0a0a0a]"
                    />
                </div>


            </motion.div>
            <div className="p-4 h-auto md:h-52 lg:h-60 xl:h-52 space-y-4 ">
                <motion.h1
                    ref={ref}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ type: "spring", stiffness: 60, damping: 25, duration: 2.0 }}
                    className="text-base md:text-xl xl:text-2xl font-bold tracking-tight text-[#181340] h-5 md:h-10  flex items-center">
                    {title}
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}

                    transition={{ type: "spring", stiffness: 50, damping: 25, duration: 2.0 }}
                    className="text-lg text-[#181340] h-full ">
                    {subtitle}
                </motion.p>
            </div>

        </div>
    )
}

export default FunctionsCard