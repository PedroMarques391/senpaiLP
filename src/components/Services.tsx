"use client"
import React, { useRef } from 'react'
import { Button } from './ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion, useInView } from "motion/react"
import Link from 'next/link'


export interface IServicesInterface {
    service: string
    value: string
    description: string
    characteristics: string[]
    textButton: "Teste grátis" | "Assine Agora"
}

const Services = ({ service,
    value,
    description,
    characteristics,
    textButton }: IServicesInterface): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div className="max-w-[400px] bg-white rounded-2xl shadow-lg p-6 border border-gray-300 flex flex-col h-full">
            <div className=" h-40">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="text-lg font-bold text-gray-900 uppercase"
                >
                    {service}
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    className="text-4xl font-extrabold text-gray-900 mt-2"
                >
                    R$ {value} <span className="text-lg font-medium">/ mês</span>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                    className="text-gray-600 mt-2"
                >
                    {description}
                </motion.p>
            </div>

            <ul className="mt-4 space-y-3 text-gray-700 flex-grow">
                {characteristics.map((item, index) => (
                    <motion.li
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ type: 'tween', ease: 'easeInOut', duration: index }}
                        key={index} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-5 h-5" />
                        <p className=' flex-1'>{item}</p>
                    </motion.li>
                ))}
            </ul>

            <Link href={`ttps://wa.me/555497153068?text=Estou%20interessado%20no%20${service}`} target='_blank' rel="noreferrer" aria-label='Link de assinatura' >
                <Button className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 transition-all mt-7">
                    {textButton} <ArrowRight size={34} />
                </Button>
            </Link>
        </div>

    )
}

export default Services