"use client";
import React, { useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { IServices } from "@/src/types";

const Services = ({
    service,
    value,
    description,
    characteristics,
    textButton,
    bestOption,
    paymentLink,
}: IServices): React.JSX.Element => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const listRef = useRef(null);
    const isInListView = useInView(listRef);

    return (
        <div className={`${bestOption ? "scale-105 bg-gradient-to-t from-primary-theme/80  to-content-primary p-1" : "p-6"}  max-w-[400px] bg-surface-card rounded-2xl h-auto md:h-full group`}>
            <div className={`${bestOption && "bg-[#ffffff] rounded-2xl p-6"} relative flex flex-col h-auto md:h-full`}>
                {bestOption && (
                    <span className="absolute top-3 right-4 bg-content-primary text-white text-xs p-2 rounded-full font-semibold tracking-wide z-10 ">
                        Melhor escolha
                    </span>
                )}

                <div >
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-secondary-theme via-secondary-theme/80 to-secondary-theme/60  bg-clip-text text-transparent duration-500 transition-colors group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-purple-700"
                    >
                        {service}
                    </motion.h1>

                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                        transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                        className="text-4xl font-extrabold text-content-primary mt-2"
                    >
                        R$ {value}
                        <span className="text-lg font-medium text-content-secondary">/ mês</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                        className="secondary md:text-base py-3 bg-gradient-to-r from-secondary-theme via-secondary-theme/80 to-secondary-theme/60  bg-clip-text text-transparent transition-colors duration-700   group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-purple-700"
                    >
                        {description}
                    </motion.p>
                </div>

                <ul className="mt-4 space-y-3 text-content-secondary flex-grow">
                    {characteristics.map((item, index) => (
                        <motion.li
                            ref={listRef}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isInListView ? 1 : 0, x: isInListView ? 0 : -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            key={index}
                            className="flex items-center gap-2"
                        >
                            <CheckCircle className="text-primary w-5 h-5 group-hover:text-purple-700 duration-500 transition-colors" />
                            <p className="flex-1 text-xs md:text-sm bg-gradient-to-l from-secondary-theme via-secondary-theme/80 to-secondary-theme/60  bg-clip-text text-transparent transition-colors duration-700   group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-purple-700">{item}</p>
                        </motion.li>
                    ))}
                </ul>

                <Link
                    href={paymentLink}
                    rel="noreferrer"
                    aria-label="Link de assinatura"
                    target='_blank'
                >
                    <Button
                        className="w-full py-6 text-base md:text-lg rounded-xl 
                               bg-content-primary text-shadow-surface-card-alt
                               hover:bg-content-primary/60 mt-7 font-semibold transition-all duration-700 cursor-pointer"
                    >
                        {textButton} <ArrowRight size={24} />
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default Services;
