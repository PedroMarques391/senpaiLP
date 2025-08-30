"use client";
import Image, { StaticImageData } from "next/image";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

interface IAlternatingSectionProps {
    image: StaticImageData
    title: string
    children: React.ReactNode
    imageGridAlign: "left" | "right"
}

const AlternatingSection = ({ image, title, children, imageGridAlign }: IAlternatingSectionProps): React.JSX.Element => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section className="grid grid-cols-1 md:grid-cols-2  place-content-center place-items-center overflow-hidden">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                className={`flex justify-center items-center bg-black w-full overflow-hidden h-full max-h-[500px] min-h-[400px] ${imageGridAlign === "left" ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
                <Image
                    alt={`Imagem ilustrativa da seção: ${title}`}
                    src={image}
                    height={700}
                    width={700}
                    priority
                    className='object-cover w-full h-full'
                />
            </motion.div>
            <div className={`w-full flex flex-col md:flex-row justify-start items-center p-7 h-full ${imageGridAlign === "left" ? "order-2" : "order-1"}`}>
                <div className='w-full lg:max-w-4/5 '>
                    <motion.h1
                        initial={{ x: imageGridAlign === "left" ? "120%" : "-120%" }}
                        animate={isInView ? { x: 0 } : { x: imageGridAlign === "left" ? "120%" : "-120%" }}
                        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                        className='text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 w-full text-left '
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ x: imageGridAlign === "left" ? "100%" : "-100%" }}
                        animate={isInView ? { x: 0 } : { x: imageGridAlign === "left" ? "120%" : "-120%" }}
                        transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
                        className='text-base lg:text-base xl:text-lg text-gray-600 leading-relaxed text-justify break-words hyphens-auto'
                    >
                        {children}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AlternatingSection;