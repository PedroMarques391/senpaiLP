"use client"
import React, { useRef } from 'react'
import { Button } from '@/src/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion, useInView } from "motion/react"
import Link from 'next/link'
import { IServices } from '@/src/types'




const Services = ({ service,
    value,
    description,
    characteristics,
    textButton, url }: IServices): React.JSX.Element => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const listRef = useRef(null)
    const isInListView = useInView(listRef)

    return (
        <div className="max-w-[400px] bg-[#FF9DBB] rounded-2xl shadow-lg p-6 border border-[#fff] flex flex-col h-auto md:h-full">
            <div className="">
                <motion.h1

                    className="text-lg font-bold text-[#fff] uppercase"
                >
                    {service}
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    className="text-4xl font-extrabold text-[#181340] mt-2"
                >
                    R$ {value} <span className="text-lg font-medium">/ mês</span>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                    className="text-white  md:text-base py-2"
                >
                    {description}
                </motion.p>
            </div>

            <ul className="mt-4 space-y-3 text-white flex-grow">
                {characteristics.map((item, index) => (
                    <motion.li
                        ref={listRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInListView ? 1 : 0 }}
                        transition={{ type: 'tween', ease: 'easeInOut', duration: index }}
                        key={index}
                        className="flex items-center gap-2">
                        <CheckCircle className="text-white w-5 h-5" />
                        <p className='flex-1 text-xs md:text-base'>{item}</p>
                    </motion.li>
                ))}
            </ul>

            <Link href={`plans/${url}`}
                rel="noreferrer"
                aria-label='Link de assinatura' >
                <Button className="w-full py-6 text-base md:text-lg rounded-xl bg-gradient-to-r bg-white  transition-all mt-7 font-semibold border text-[#FF738D]">
                    {textButton} <ArrowRight size={34} />
                </Button>
            </Link>
        </div>

    )
}

export default Services