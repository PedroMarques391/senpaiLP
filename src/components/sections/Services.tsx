"use client"
import React, { useRef } from 'react'
import { Button } from '@/src/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion, useInView } from "motion/react"
import Link from 'next/link'
import { IServices } from '@/src/types'

const Services = ({
    service,
    value,
    description,
    characteristics,
    textButton,
    url
}: IServices): React.JSX.Element => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const listRef = useRef(null)
    const isInListView = useInView(listRef)

    return (
        <div className="max-w-[400px] bg-surface-card rounded-2xl p-6 flex flex-col h-auto md:h-full">

            <div>
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-bold tracking-wide text-content-secondary uppercase"
                >
                    {service}
                </motion.h1>

                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
                    className="text-4xl font-extrabold text-content-primary mt-2"
                >
                    R$ {value}
                    <span className="text-lg font-medium text-content-secondary">/ mês</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                    className="text-content-secondary md:text-base py-3"
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
                        <CheckCircle className="text-primary w-5 h-5" />
                        <p className="flex-1 text-xs md:text-sm">{item}</p>
                    </motion.li>
                ))}
            </ul>

            <Link
                href={`plans/${url}`}
                rel="noreferrer"
                aria-label="Link de assinatura"
            >
                <Button
                    className="w-full py-6 text-base md:text-lg rounded-xl 
                               bg-content-primary text-shadow-surface-card-alt
                               hover:bg-content-primary/60 mt-7 font-semibold transition-all duration-700"
                >
                    {textButton} <ArrowRight size={24} />
                </Button>
            </Link>
        </div>
    )
}

export default Services
